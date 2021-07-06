const Question = require('../models/questionModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// @desc    Fetch all tests
// @route   GET /api/Test
// @access  Public
const getQuestions = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['question', order]]
  Question.findAll({ offset: page, limit: pageSize, order: ordervalue })
    .then(questions => res.json({ questions, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Fetch all tests
// @route   GET /api/Question
// @access  Public
const getTestQuestions = (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['question', order]]
  Question.findAll({ offset: page, limit: pageSize, order: ordervalue, where: {
      testId: req.params.id
  } })
    .then(questions => res.json({ questions, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual Question
// @route   POST /api/Question/add
// @access  Public
const addQuestion = (req, res) => {
  const {
    question, answer, options, testId
  } = req.body
  Question.create({
    question, answer, options, testId
  })
    .then(() => res.json({ message: 'Question Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Update a Question
// @route   PUT /api/Question/:id
// @access  Public
const updateQuestion = (req, res) => {
  const {
    question, answer, options, testId
  } = req.body
  const id = req.params.id
  Question.findByPk(id).then(questions => {
    if (questions) {
      const { id } = questions
      Question.update({
      question, answer, options, testId
      },
      { where: { id } })
        .then(() => res.json({ message: 'Question Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('Question not found')
  })
}

// @desc    Fetch single Question
// @route   GET /api/Question/:id
// @access  Public
const getQuestionById = (req, res) => {
  const id = req.params.id

  Question.findByPk(id)
    .then(question => {
      if (question) {
        res.json(question)
      } else {
        res.status(404)
        throw new Error('Question not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Delete a Question
// @route   delete /api/Question/:id
// @access  Public
const deleteQuestion = (req, res) => {
  const id = req.params.id
  Question.findByPk(id).then(question => {
    if (question) {
      const { id } = question
      Question.destroy({ where: { id } })
        .then(() => res.json({ message: 'Question Deleted !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Question not found')
    }
  })
}

// @desc    Search title
// @route   POST /api/Question/search
// @access  Private
const searchQuestionTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  Question.findAll({ where: { test_name: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(title => res.json({ title }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { addQuestion, getQuestions, updateQuestion, getQuestionById, deleteQuestion, searchQuestionTitle, getTestQuestions }
