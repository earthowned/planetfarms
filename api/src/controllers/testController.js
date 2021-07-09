const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../models')
// @desc    Fetch all tests
// @route   GET /api/Test
// @access  Public
const getTests = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['test_name', order]]
  db.Test.findAll({ offset: page, limit: pageSize, order: ordervalue })
    .then(tests => res.json({ tests, page, pageSize }).status(200))
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
  db.Test.findAll({
    offset: page,
    limit: pageSize,
    order: ordervalue,
    where: {
      lessonId: req.params.id
    }
  })
    .then(tests => res.json({ tests, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual db.Test
// @route   POST /api/Test/add
// @access  Public
const addTest = async (req, res) => {
  try {
    const {
      test_name, lessonId, description, questions
    } = req.body

    if (questions.length < 1) return res.json({ message: 'Please provide questions for the test.' })
    const result = await db.sequelize.transaction(async (t) => {
      const test = await db.Test.create({
        test_name,
        lessonId,
        description
      }, { transaction: t })

      const newQuestions = []

      questions.forEach(async (item) => {
        const questionObj = {
          ...item,
          testId: test.id,
          options: [...item.options, item.answer]
        }
        const {question, answer, options} = questionObj
        //Checking empty values
        if(question && answer && !options.includes('')) {
          newQuestions.push(questionObj)
        }
      })
      // await questions.map(async (item) => await Question.create({...item, testId: test.id}, {transaction: t}));
      await db.Question.bulkCreate(newQuestions, { transaction: t })
      return 'test is created with questions.'
    })

    if (result) res.json({ message: result }).status(200)
  } catch (error) {
    res.json(error).status(400)
  }
}

// @desc    Update a db.Test
// @route   PUT /api/Test/:id
// @access  Public
const updateTest = (req, res) => {
  const {
    test_name, lessonId, description
  } = req.body
  const id = req.params.id
  db.Test.findByPk(id).then(test => {
    if (test) {
      const { id } = test
      db.Test.update({
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

// @desc    Fetch single db.Test
// @route   GET /api/Test/:id
// @access  Public
const getTestById = (req, res) => {
  const id = req.params.id

  db.Test.findByPk(id)
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

// @desc    Delete a db.Test
// @route   delete /api/Test/:id
// @access  Public
const deleteTest = (req, res) => {
  const id = req.params.id
  db.Test.findByPk(id).then(test => {
    if (test) {
      const { id } = test
      db.Test.destroy({ where: { id } })
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

  db.Test.findAll({ where: { test_name: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(title => res.json({ title }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { addTest, getTests, updateTest, getTestById, deleteTest, searchTestTitle, getLessonTests }
