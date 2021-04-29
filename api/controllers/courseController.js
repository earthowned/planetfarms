const Courses = require('../models/courseModel.js')
const Sequelize = require('sequelize')
const queryUtils = require('../utils/query.js')
const Op = Sequelize.Op

// @desc    Fetch all course
// @route   GET /api/courses
// @access  Public
const getCourses = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const order = req.query.order || 'ASC'

  Courses.findAll({ offset: page, limit: pageSize, order: [['title', order]] })
    .then(courses => {
      // queryUtils.paginate({ page, pageSize })
      res.json({ courses, page, pageSize }).status(200)
    })
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual course
// @route   POST /api/courses/add
// @access  Public
const addCourse = (req, res) => {
  const {
    title, description, languageOfInstruction, memberLimit, method, gradeLevel, subjectLevel, creator, steps
  } = req.body
  Courses.create({
    _attachments: 'uploads/' + req.file.filename,
    title,
    description,
    languageOfInstruction,
    memberLimit,
    method,
    gradeLevel,
    subjectLevel,
    creator,
    steps
  })
    .then(() => res.json({ message: 'Course Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Public
const updateCourse = (req, res) => {
  const {
    title, description, languageOfInstruction, memberLimit, method, gradeLevel, subjectLevel, creator, steps
  } = req.body
  const id = req.params.id
  Courses.findByPk(id).then(product => {
    if (product) {
      const { id } = product
      Courses.update({
        _attachments: 'uploads/' + req.file.filename,
        title,
        description,
        languageOfInstruction,
        memberLimit,
        method,
        gradeLevel,
        subjectLevel,
        creator,
        steps
      },
      { where: { id } })
        .then(() => res.json({ message: 'Course Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('Course not found')
  })
}

// @desc    Fetch single course
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = (req, res) => {
  const id = req.params.id

  Courses.findByPk(id)
    .then(course => {
      if (course) {
        res.json(course)
      } else {
        res.status(404)
        throw new Error('Course not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Delete a course
// @route   delete /api/courses/:id
// @access  Public
const deleteCourse = (req, res) => {
  const id = req.params.id
  Courses.findByPk(id).then(resource => {
    if (resource) {
      const { id } = resource
      Courses.destroy({ where: { id } })
        .then(() => res.json({ message: 'Course Deleted !!!' }).status(200))
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

  Courses.findAll({ where: { title: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(title => res.json({ title }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { addCourse, getCourses, updateCourse, getCourseById, deleteCourse, searchCoursesTitle }
