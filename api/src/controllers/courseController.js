const fs = require('fs/promises')
const path = require('path')
const { Joi } = require('express-validation')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { sequelize } = require('../models')
const db = require('../models')
const NotFoundError = require('../errors/notFoundError')
const { paginatedResponse } = require('../utils/query')
const BadRequestError = require('../errors/badRequestError')
const ForbiddenRequestError = require('../errors/forbiddenRequestError')

// @desc    Fetch all course
// @route   GET /api/courses?pageNumber=${pageNumber}&category=${category}&search=${search}
// @access  Public
const getCourses = async (req, res) => {
  const { filter = 'All', search, pageNumber = 1, pageSize = 10, sort = 'AlphabetAscending' } = req.query
  hasPurchase = false
  filterBy = {}
  enrollQuery = sequelize.literal(`(SELECT COUNT("userId") FROM enrolls WHERE "courseId" = courses.id)`)
  switch (filter) {
    case 'My':
      filterBy = { creatorId: req.user.id }
      break;
    case 'Paid':
      hasPurchase = true
      break;
  }
  switch (sort) {
    case 'Popular':
      order = [enrollQuery, 'DESC']
      break;
    case 'Cheap':
      order = ['price', 'ASC']
      break;
    case 'Expensive':
      order = ['price', 'DESC']
      break;
    // case 'RateDescending':
    //   order = ['rating', 'DESC']
    //   break;
    // case 'RateAscending':
    //   order = ['rating', 'ASC']
    //   break;
    case 'AlphabetDescending':
      order = ['title', 'DESC']
      break;
    case 'AlphabetAscending':
      order = ['title', 'ASC']
      break;
  }
  const courses = await db.Courses.findAndCountAll({
    offset: (pageNumber - 1) * pageSize,
    limit: pageSize,
    order: [order],
    attributes: ['id', 'title', 'description', 'creatorId', 'thumbnail', 'price', 'isFree', [enrollQuery, 'members']],
    include: [
      db.Lesson,
      // db.CourseView,
      {
        model: db.User,
        as: 'creator',
        attributes: ['id', 'userID', 'email', 'firstName', 'lastName', 'attachments'],
      },
      {
        model: db.User,
        as: 'enrolledUser',
        where: {
          id: {
            [Op.eq]: req.user.id
          }
        },
        required: hasPurchase,
        attributes: [['id', 'userId']],
        through: {
          attributes: ['isEnroll']
        }
      },
      {
        model: db.RichText,
        include: [db.Text, db.Photo]
      }
    ],
    where: {
      ...(search ? { title: { [Op.iLike]: `%${search}%` } } : {}),
      ...filterBy
    },
    distinct: true
  })

  // TODO: need to fix resizing of image when used with multiple files
  // courses.rows.forEach((course) => {
  //   course.thumbnail = changeFormat(course.thumbnail)
  //   course.lessons.forEach((lesson) => {
  //     lesson.coverImg = changeFormat(lesson.coverImg)
  //   })
  // })
  courses.rows = courses.rows.map(formatCourse)
  res.status(200).json({
    message: 'Fetched courses successfully',
    ...paginatedResponse({ data: courses, pageSize, pageNumber })
  })
}

const courseSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().positive(),
    isPublished: Joi.boolean().required(),
    thumbnail: Joi.string().uri(),
    description: Joi.array().items(
      Joi.alternatives().try(
        Joi.object({
          heading: Joi.string(),
          text: Joi.string().required(),
        }),
        Joi.object({
          image: Joi.string().uri().required(),
          description: Joi.string()
        })
      )
    )
  })
}

const formatCourse = (course) => {
  const description = course.rich_text ? [
    ...course.rich_text.photos, ...course.rich_text.texts
  ] : []
  const sortedDescription = description
    .sort((a, b) => a.order - b.order)
    .map(item => {
      if (item.image) {
        return {
          image: item.image,
          description: item.description
        }
      }

      return {
        heading: item.textHeading,
        text: item.textDescription
      }
    })

  const formattedData = {
    id: course.id,
    title: course.title,
    description: sortedDescription,
    thumbnail: course.thumbnail,
    price: course.price,
    isPublished: course.isPublished,
    isFree: course.isFree,
    createdAt: course.createdAt,
    updatedAt: course.updatedAt,
    creatorId: course.creatorId,
    lessons: course.lessons,
    members: course.enrolledUser,
    creator: course.creator,
    materials: [] // TODO get all course lessons's materials
  }

  return formattedData
}

const createRichtextData = async (data, transaction) => {
  let richtextId = null

  if (data) {
    const richtext = await db.RichText.create({}, { transaction })
    richtextId = richtext.id

    await Promise.all(data.map((item, index) => {
      if (item.image) {
        return db.Photo.create({
          richtextId,
          image: item.image,
          description: item.description,
          isImgDesc: true,
          order: index + 1
        }, {
          transaction
        })
      }

      return db.Text.create({
        richtextId,
        textHeading: item.heading,
        textDescription: item.text,
        order: index + 1
      }, {
        transaction
      })
    }))
  }

  return richtextId
}

// @desc    Add individual course
// @route   POST /api/courses/add
// @access  Public
const addCourse = async (req, res) => {
  const { body, user } = req
  const price = body.price > 0 ? Number(body.price) : null

  const courseData = {
    title: body.title,
    thumbnail: body.thumbnail,
    price,
    isPublished: body.isPublished,
    isFree: price === null ? true : false,
    creatorId: user.id
  }
  let createdCourseId

  await db.sequelize.transaction(async (transaction) => {
    const richtextId = await createRichtextData(body.description, transaction)

    const createdCourse = await db.Courses.create({
      ...courseData,
      richtextId
    }, {
      transaction
    })
    createdCourseId = createdCourse.id
  })

  const course = await findCourseById(createdCourseId)

  res.status(201).json({
    message: 'New course added successfully',
    data: formatCourse(course.get())
  })
}

const deleteCourseImages = async (photos) => {
  await Promise.all(photos.map(async photo => {
    const [_, filename] = photo.split('/resources/')
    if (!filename) return

    const photoPath = path.join(__dirname, '..', '..', 'files', filename)

    try {
      await fs.rm(photoPath)
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error
      }
    }
  }))
}

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Public
const updateCourse = async (req, res) => {
  const { body, user, params: { id: courseId } } = req

  let course = await db.Courses.findByPk(courseId)

  if (!course) {
    throw new NotFoundError()
  }

  if (course.creatorId !== user.id) {
    throw new ForbiddenRequestError()
  }

  const price = body.price > 0 ? Number(body.price) : null

  const courseData = {
    title: body.title,
    thumbnail: body.thumbnail || null,
    price,
    isPublished: body.isPublished,
    isFree: price === null ? true : false,
    creatorId: user.id
  }

  await db.sequelize.transaction(async (transaction) => {
    const richtextId = await createRichtextData(body.description, transaction)

    const photos = await db.Photo.findAll({
      where: { richtextId: course.richtextId }
    })
    const images = (body.description || []).reduce((acc, curr) => {
      if (curr.image) {
        acc.push(curr.image)
      }

      return acc
    }, [])

    const photosToDelete = [
      ...photos
        .map(photo => photo.image)
        .filter(photo => !images.includes(photo)),
      ...(
        course.thumbnail && course.thumbnail !== body.thumbnail ?
        [course.thumbnail] : []
      )
    ]
    await deleteCourseImages(photosToDelete)
    await db.RichText.destroy({
      where: {
        id: course.richtextId
      }
    }, {
      transaction
    })
    await course.update({
      ...courseData,
      richtextId
    }, {
      transaction
    })
  })

  course = await findCourseById(courseId)

  res.status(200).json({
    message: 'Course updated successfully',
    data: formatCourse(course.get())
  })
}

const findCourseById = (id) => db.Courses.findOne({
  where: { id },
  order: [[db.Lesson, 'createdAt', 'ASC']],
  include: [
    {
      model: db.Lesson,
      order: [['order', 'ASC']],
      include: [db.Test, db.RichText,
      // {
      //   model: db.LessonProgress,
      //   where: {
      //     userId: {
      //       [Op.eq]: req.user.id
      //     }
      //   },
      //   required: false
      // }
      ]
    },
    {
      model: db.User,
      attributes: ['email'],
      // where: {
      //   id: {
      //     [Op.eq]: req.user.id
      //   }
      // },
      required: false,
      as: 'enrolledUser',
      through: {
        attributes: ['isEnroll']
      }
    },
    {
      model: db.RichText,
      include: [db.Text, db.Photo]
    },
    {
      model: db.User,
      as: 'creator',
      attributes: ['id', 'userID', 'firstName', 'lastName', 'attachments', 'phone', 'email']
    }
  ],
})

// @desc    Fetch single course
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res) => {
  const { id } = req.params
  const course = await findCourseById(id)

  if (!course) {
    return res.status(404).json({ message: 'Course not found' })
  }

  res.status(200).json({
    message: 'Course fetched successfully',
    data: formatCourse(course.get())
  })
}

// @desc    Delete a course
// @route   delete /api/courses/:id
// @access  Public
const deleteCourse = async (req, res) => {
  const { params: { id: courseId }, user } = req

  await db.sequelize.transaction(async (transaction) => {
    const course = await db.Courses.findByPk(courseId)

    if (!course) {
      throw new NotFoundError()
    }

    if (course.creatorId !== user.id) {
      throw new ForbiddenRequestError()
    }

    const photos = await db.Photo.findAll({
      where: { richtextId: course.richtextId }
    })
    await course.destroy({ transaction })
    await db.RichText.destroy({
      where: { id: course.richtextId },
      transaction
    })
    const photosToDelete = [
      ...photos.map(photo => photo.image),
      ...(course.thumbnail ? [course.thumbnail] : [])
    ]
    await deleteCourseImages(photosToDelete)
  })

  res.status(200).json({
    message: 'Course deleted successfully'
  })
}

module.exports = {
  addCourse,
  getCourses,
  updateCourse,
  getCourseById,
  deleteCourse,
  courseSchema
}
