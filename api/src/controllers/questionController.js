// const Question = require('../models/questionModel')
const db = require('../models/index')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const sequelize = require('../config/database.js')
const { fn, col } = sequelize
// @desc    Fetch all tests
// @route   GET /api/Test
// @access  Public
const getQuestions = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['question', order]]
  db.Question.findAll({ offset: page, limit: pageSize, order: ordervalue })
    .then(questions => res.json({ questions, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Fetch all questions
// @route   GET /api/questions/lesson/:lessonId
// @access  Public
const getLessonQuestions = async (req, res) => {
  try {
    const pageSize = 10
    const page = Number(req.query.pageNumber) || 0
    const order = req.query.order || 'ASC'
    const ordervalue = order && [['question', order]]

    const test = await db.Test.findOne({ where: { lessonId: req.params.id } })

    if (!test) return res.json({ message: 'test doesn\'t exist.' })

    const newquestions = await db.Question.findAll({ offset: page, limit: pageSize, order: [['position', 'ASC']], where: { testId: test.id } })

    const questions = newquestions.map(item => {
      if (item.type === 'mcq') {
        item.options = item.options.filter(el => el !== item.answer)
      }
      return item
    })

    res.json({ questions, page, pageSize }).status(200)
  } catch (error) {
    res.json(error)
  }
}

// randomize the answers
function randomAnswer (array) {
  let currentIndex = array.length; let temporaryValue; let randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

// @desc    Fetch all tests
// @route   GET /api/Question
// @access  Public
const getTestQuestions = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0

  db.Question.findAll({
    offset: page,
    limit: pageSize,
    order: [['position', 'ASC']],
    where: {
      testId: req.params.id
    },
    attributes: ['options', 'question', 'type']
  })
    .then(questions => {
      if (questions) {
        questions.forEach(item => {
          if (item.type === 'mcq') randomAnswer(item.options)
        })

        // let newOptions = randomArrayShuffle(options);
        return res.json({
          questions,
          page,
          pageSize
        }).status(200)
      }

      // const [...item] = questions

      return res.json(questions)
    })
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual Question
// @route   POST /api/Question/add
// @access  Public
const addQuestion = (req, res) => {
  const {
    question, answer, options, testId
  } = req.body
  db.Question.create({
    question, answer, options, testId
  })
    .then(() => res.json({ message: 'Question Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Update a Question
// @route   PUT /api/question/:id
// @access  Public
const updateQuestion = async (req, res) => {
  try {
    const {
      question, answer, options, testId, type
    } = req.body
    const id = req.params.id

    const questionExist = await db.Question.findByPk(id)

    if (!questionExist) return res.json({ message: 'Question doesn\'t exist' })

    if (questionExist.type === 'subjective') {
      await db.Question.update({ question, testId, type }, { where: { id } })
      return res.json({ message: 'Question updated !!!' }).status(200)
    }

    await db.Question.update({ question, answer, options: [...options, answer], testId, type }, { where: { id } })

    return res.json({ message: 'Question updated !!!' }).status(200)
  } catch (error) {
    res.json(error)
  }
}

// @desc    Fetch single Question
// @route   GET /api/Question/:id
// @access  Public
const getQuestionById = (req, res) => {
  const id = req.params.id

  db.Question.findByPk(id)
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
  db.Question.findByPk(id).then(question => {
    if (question) {
      const { id } = question
      db.Question.destroy({ where: { id } })
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

  db.Question.findAll({ where: { test_name: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(title => res.json({ title }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { addQuestion, getQuestions, updateQuestion, getQuestionById, deleteQuestion, searchQuestionTitle, getTestQuestions, getLessonQuestions }
