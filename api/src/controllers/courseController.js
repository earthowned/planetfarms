const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../models')
const NotFoundError = require('../errors/notFoundError')
const CircularJSON = require('circular-json')
const { changeFormat } = require('../helpers/filehelpers')

// @desc    Fetch all course
// @route   GET /api/courses
// @access  Public
const getCourses = async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'

  const courses = await db.Courses.findAll({
    offset: page,
    limit: pageSize,
    order: [['title', order]],
    include: [db.Lesson, db.Enroll]
  })

  courses.forEach((course) => {
    course.thumbnail = changeFormat(course.thumbnail)
    course.lessons.forEach((lesson) => {
      lesson.coverImg = changeFormat(lesson.coverImg)
    })
  })

  res.status(200).json({
    status: true,
    message: 'fetched courses successfully',
    data: courses,
    page,
    pageSize
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
  const { id } = req.params
  const course = await db.Courses.findOne({
    where: { id },
    include: [db.Lesson, db.Enroll]
  })
  if (!course) {
    throw new NotFoundError()
  }
  course.lessons.forEach((lesson) => {
    lesson.coverImg = changeFormat(lesson.coverImg)
  })
  const thumbnail = changeFormat(course?.dataValues?.thumbnail)
  const coverImg = changeFormat(course?.dataValues?.lessons?.coverImg)
  const courseData = course.dataValues
  const data = Object.assign({
    ...course,
    dataValues: { ...courseData, thumbnail, coverImg }
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
const deleteCourse = (req, res) => {
  const id = req.params.id
  db.Courses.findOne({
    where: {
      id: id
    }
  }).then((resource) => {
    if (resource) {
      const { id } = resource
      db.Courses.destroy({ where: { id } })
        .then(() =>
          res.json({ message: 'Course Deleted Successfully' }).status(200)
        )
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Course not found')
    }
  })
}

// @desc    Search title
// @route   POST /api/courses/search
// @access  Private
const searchCoursesTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  db.Courses.findAll({
    where: { title: { [Op.iLike]: '%' + title + '%' } },
    order: [['title', order]]
  })
    .then((title) => res.json({ title }).status(200))
    .catch((err) => res.json({ error: err }).status(400))
}

module.exports = {
  addCourse,
  getCourses,
  updateCourse,
  getCourseById,
  deleteCourse,
  searchCoursesTitle
}
