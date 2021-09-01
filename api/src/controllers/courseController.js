const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../models')
const NotFoundError = require('../errors/notFoundError')
const CircularJSON = require('circular-json')
const { changeFormat } = require('../helpers/filehelpers')
const { paginatedResponse } = require('../utils/query')

// @desc    Fetch all course
// @route   GET /api/courses?pageNumber=${pageNumber}&category=${category}&search=${search}
// @access  Public
const getCourses = async (req, res) => {
  const { category, search, pageNumber = 1, pageSize = 6 } = req.query
  const order = req.query.order || 'ASC'
  const courses = await db.Courses.findAndCountAll({
    offset: (pageNumber - 1) * pageSize,
    limit: pageSize,
    order: [['title', order]],
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
        required: false,
        attributes: [['id', 'userId']],
        through: {
          attributes: ['isEnroll', 'courseId']
        }
      }
    ],
    where: {
      ...(search ? { title: { [Op.iLike]: '%' + search + '%' } } : {}),
      ...(category ? { categoryId: Number(category) } : {})
    },
    distinct: true
  })
  console.log(courses)
  courses.rows.forEach((course) => {
    course.thumbnail = changeFormat(course.thumbnail)
    course.lessons.forEach((lesson) => {
      lesson.coverImg = changeFormat(lesson.coverImg)
    })
  })
  res.status(200).json({
    status: true,
    message: 'Fetched successfully',
    ...paginatedResponse({ data: courses, pageSize, pageNumber })
  })
}

// @desc    Add individual course
// @route   POST /api/courses/add
// @access  Public
const addCourse = async (req, res) => {
  try {
    let thumbnail = ''
    if (req.file) {
      thumbnail = req.file.filename
    }
    const course = await db.Courses.create({ ...req.body, thumbnail })
    res.status(201).json({
      status: true,
      message: ' new course added successfully',
      data: course
    })
  } catch (error) {
    return res.json({ error: 'error.message' })
  }
}

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Public
const updateCourse = async (req, res) => {
  const { id } = req.params
  try {
    let thumbnail
    if (req.file) {
      thumbnail = req.file.filename
    }
    const course = await db.Courses.update(
      { ...req.body, thumbnail },
      { where: { id } }
    )
    res.status(202).json({
      status: true,
      message: 'course updated successfully',
      data: course
    })
  } catch (error) {
    res.json({ status: true, message: error.message })
  }
}

// @desc    Fetch single course
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = async (req, res) => {
  const course = await db.Courses.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: db.Lesson,
        order: [['order', 'ASC']],
        include: [
          db.Test,
          {
            model: db.LessonProgress,
            where: {
              userId: {
                [Op.eq]: req.user.id
              }
            },
            required: false
          }
        ]
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
    status: true,
    message: 'fetched course successfully',
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
  res.status(202).json({
    status: true,
    message: 'course deleted successfully',
    data: course
  })
}

module.exports = {
  addCourse,
  getCourses,
  updateCourse,
  getCourseById,
  deleteCourse
}
