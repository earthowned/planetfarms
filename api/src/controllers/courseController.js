const { Joi } = require('express-validation')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { sequelize } = require('../models')
const db = require('../models')
const NotFoundError = require('../errors/notFoundError')
const { changeFormat } = require('../helpers/filehelpers')
const { paginatedResponse } = require('../utils/query')
const BadRequestError = require('../errors/badRequestError')

// @desc    Fetch all course
// @route   GET /api/courses?pageNumber=${pageNumber}&category=${category}&search=${search}
// @access  Public
const getCourses = async (req, res) => {
  const { filter = 'All', search, pageNumber = 1, pageSize = 6, sort = 'AlphabetAscending' } = req.query
  hasPurchase = false
  filterBy = {}
  enrollQuery = sequelize.literal(`(SELECT COUNT("userId") FROM enrolls WHERE "courseId" = courses.id)`)
  switch (filter) {
    case 'My':
      filterBy = { creator: { [Op.eq]: ''+req.user.userID+'' } }
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
    attributes: ['id', 'title', 'description', 'creator', 'thumbnail', 'price', 'isFree', [enrollQuery, 'members']],
    include: [
      db.Lesson,
      db.Category,
      db.CourseView,
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
    ],
    where: {
      ...(search ? { title: { [Op.iLike]: '%' + search + '%' } } : {}),
      ...filterBy
    },
    distinct: true
  })
  courses.rows.forEach((course) => {
    course.thumbnail = changeFormat(course.thumbnail)
    course.lessons.forEach((lesson) => {
      lesson.coverImg = changeFormat(lesson.coverImg)
    })
  })
  res.status(200).json({
    message: 'Fetched successfully',
    ...paginatedResponse({ data: courses, pageSize, pageNumber })
  })
}

const addCourseSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().positive(),
    isPublished: Joi.boolean().required(),
    categoryId: Joi.string().required(),
    text_heading: Joi.alternatives().try(
      Joi.string(),
      Joi.array().items(Joi.string())
    ),
    text_description: Joi.alternatives().try(
      Joi.string(),
      Joi.array().items(Joi.string())
    ),
    photo_description: Joi.alternatives().try(
      Joi.string(),
      Joi.array().items(Joi.string())
    ),
    order: Joi.alternatives().try(
      Joi.string().valid('text', 'image'),
      Joi.array().items(Joi.string().valid('text', 'image'))
    ).required()
  }),
}

// @desc    Add individual course
// @route   POST /api/courses/add
// @access  Public
const addCourse = async (req, res) => {
  try {
    const { body, user, files } = req
    const thumbnail = files.thumbnail?.[0]?.filename || null
    const price = body.price > 0 ? Number(body.price) : null

    const courseData = {
      title: body.title,
      description: body.description,
      thumbnail: thumbnail ? `thumbnail/${thumbnail}` : null,
      price,
      isPublished: body.isPublished,
      isFree: price === null ? true : false,
      creatorId: user.id,
      categoryId: body.categoryId
    }

    await db.sequelize.transaction(async (transaction) => {
      let richtext = null
      let richtextId = null

      if (body.order) {
        richtext = await db.RichText.create({}, { transaction })
        richtextId = richtext.id

        const richtextCount = Array.isArray(body.text_description) ? body.text_description.length : 1
        const photoCount = files.courses?.length || 0
        const orderCount = Array.isArray(body.order) ? body.order.length : 1

        // add validation if texts and photo tallies the order count
        if (photoCount + richtextCount !== orderCount) {
          throw new BadRequestError('Contents don\'t match the ordering count')
        }

        await Promise.all([...(orderCount === 1 ? [body.order] : body.order)].map(async (order, index) => {
          if (order === 'text') {
            return db.Text.create({
              richtextId,
              textHeading: Array.isArray(body.text_heading) ? body.text_heading.shift() : body.text_heading,
              textDescription: Array.isArray(body.text_description) ? body.text_description.shift() : body.text_description,
              order: index + 1
            }, {
              transaction
            })
          }

          return db.Photo.create({
            richtextId,
            lessonImg: `courses/${files.courses.shift().filename}`,
            photoDescription: Array.isArray(body.photo_description) ? body.photo_description.shift() : body.photo_description,
            isImgDesc: false,
            order: index + 1
          }, {
            transaction
          })
        }))
      }

      const course = await db.Courses.create({
        ...courseData,
        richtextId
      }, {
        transaction
      })

      res.status(201).json({
        message: 'New course added successfully',
        data: course.get()
      })
    })
  } catch (error) {
    return res.status(400).json({ error: error.message })
  }
}

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Public
const updateCourse = async (req, res) => {
  const { id } = req.params
  try {
    const toUpdate = {
      ...req.body
    }

    if (req.file) {
      toUpdate.thumbnail = req.file.filename
    }
    const course = await db.Courses.update(
      toUpdate,
      { where: { id } }
    )
    res.status(200).json({
      message: 'Course updated successfully',
      data: course
    })
  } catch (error) {
    res.json({ message: error.message })
  }
}

// @desc    Fetch single course
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res) => {
  const course = await db.Courses.findOne({
    where: { id: req.params.id },
    order: [[db.Lesson, 'createdAt', 'ASC']],
    include: [
      {
        model: db.Lesson,
        order: [['order', 'ASC']],
        include: [db.Test, db.RichText, {
          model: db.LessonProgress,
          where: {
            userId: {
              [Op.eq]: req.user.id
            }
          },
          required: false
        }]
      },
      {
        model: db.User,
        attributes: ['email'],
        where: {
          id: {
            [Op.eq]: req.user.id
          }
        },
        required: false,
        as: 'enrolledUser',
        through: {
          attributes: ['isEnroll']
        }
      },
      db.Category,
      {
        model: db.RichText,
        include: [db.Text, db.Photo]
      },
    ],
  })

  if (!course) {
    return res.status(404).json({ message: 'Course not found' })
  }

  const data = {
    ...course.get(),
    // TODO: need to fix resizing of image when used with multiple files
    // thumbnail: changeFormat(course?.thumbnail),
    // coverImg: changeFormat(course?.lessons?.coverImg)
  }

  res.status(200).json({
    message: 'Course fetched successfully',
    data
  })
}

// @desc    Delete a course
// @route   delete /api/courses/:id
// @access  Public
const deleteCourse = async (req, res) => {
  const { id } = req.params
  const course = await db.Courses.destroy({ where: { id } })
  if (!course) {
    throw new NotFoundError()
  }
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
  addCourseSchema
}
