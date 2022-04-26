const { Joi } = require('express-validation')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { sequelize } = require('../models')
const db = require('../models')
const NotFoundError = require('../errors/notFoundError')
const CircularJSON = require('circular-json')
const { changeFormat } = require('../helpers/filehelpers')
const { paginatedResponse } = require('../utils/query')

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
    thumbnail: Joi.object().required(),
    text_description: Joi.array().items(Joi.object({
      heading: Joi.string(),
      text: Joi.string().required()
    })),
    order: Joi.array().items(Joi.string().valid('text', 'image'))
  }),
}

// @desc    Add individual course
// @route   POST /api/courses/add
// @access  Public
const addCourse = async (req, res) => {
  try {
    // doing some debugging
    res.status(201).json({
      body: {
        ...req.body
      },
      file: {
        ...req.file
      },
      files: {
        ...req.files
      }
    })
    return

    let thumbnail
    if (req.file) {
      thumbnail = req.file.filename
    }
    const course = await db.Courses.create({ ...req.body, thumbnail })
    res.status(201).json({
      message: 'New course added successfully',
      data: course
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
      db.Category
    ]
  })
  if (!course) {
    return res.json({ message: 'course not found' })
  }
  const data = Object.assign({
    ...course,
    dataValues: {
      ...course.dataValues,
      thumbnail: changeFormat(course?.dataValues?.thumbnail),
      coverImg: changeFormat(course?.dataValues?.lessons?.coverImg)
    }
  })
  const str = JSON.parse(CircularJSON.stringify(data))
  res.status(200).json({
    message: 'Course fetched successfully',
    data: str.dataValues
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
    message: 'Course deleted successfully',
    data: course
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
