const Test = require('../models/testModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// @desc    Fetch all tests
// @route   GET /api/Test
// @access  Public
const getTests = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['test_name', order]]
  Test.findAll({ offset: page, limit: pageSize, order: ordervalue })
    .then(news => res.json({ news, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Fetch all tests
// @route   GET /api/Test
// @access  Public
const getLessonTests = (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['test_name', order]]
  Test.findAll({ offset: page, limit: pageSize, order: ordervalue, where: {
      lessonId: req.params.id
  } })
    .then(news => res.json({ news, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual Test
// @route   POST /api/Test/add
// @access  Public
const addTest = (req, res) => {
  const {
    test_name, lessonId, description
  } = req.body
  Test.create({
    test_name,
    description,
    lessonId
  })
    .then(() => res.json({ message: 'Test Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Update a Test
// @route   PUT /api/Test/:id
// @access  Public
const updateTest = (req, res) => {
  const {
    test_name, lessonId, description
  } = req.body
  const id = req.params.id
  Test.findByPk(id).then(test => {
    if (test) {
      const { id } = test
      Test.update({
       test_name,
       lessonId,
       description
      },
      { where: { id } })
        .then(() => res.json({ message: 'Test Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('Test not found')
  })
}

// @desc    Fetch single Test
// @route   GET /api/Test/:id
// @access  Public
const getTestById = (req, res) => {
  const id = req.params.id

  Test.findByPk(id)
    .then(test => {
      if (test) {
        res.json(test)
      } else {
        res.status(404)
        throw new Error('Test not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Delete a Test
// @route   delete /api/Test/:id
// @access  Public
const deleteTest = (req, res) => {
  const id = req.params.id
  Test.findByPk(id).then(test => {
    if (test) {
      const { id } = test
      Test.destroy({ where: { id } })
        .then(() => res.json({ message: 'Test Deleted !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Test not found')
    }
  })
}

// @desc    Search title
// @route   POST /api/Test/search
// @access  Private
const searchTestTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  Test.findAll({ where: { test_name: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(title => res.json({ title }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { addTest, getTests, updateTest, getTestById, deleteTest, searchTestTitle, getLessonTests }
