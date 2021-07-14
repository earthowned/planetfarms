const Test = require('../models/testModel')
const Question = require('../models/questionModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const sequelize = require('../config/database.js')
const UserTest = require('../models/userTestModel')

// @desc    Fetch all tests
// @route   GET /api/Test
// @access  Public
const getUserTests = (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 0

  const userId = 1
  UserTest.findAll({ offset: page, limit: pageSize, where: { userId, testId: req.params.id } })
    .then(tests => res.json({ tests, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

const getSingleUserTest = async (req, res) => {
  try {
    const userId = 1
    const userTest = await UserTest.findOne({ where: { id: req.params.id, userId } })
    res.json(userTest)
  } catch (error) {
    res.json(error).status(400)
  }
}

// @desc    Add individual Test
// @route   POST /api/Test/add
// @access  Public
const takeTest = async (req, res) => {
  try {
    const {
      lessonId, startTime
    } = req.body
    const userId = 1
    const test = await Test.findOne({ where: { lessonId: parseInt(lessonId) } })
    if (!test) {
      return res.json({ message: 'Test doesn\'t exist.' })
    }
    const userTest = await UserTest.create({ lessonId, userId, startTime, testId: test.id })
    res.json({ message: 'Test has started.', id: userTest.id })
  } catch (error) {
    res.json(error).status(400)
  }
}

const endTest = async (req, res) => {
  try {
    const { endTime, choices } = req.body
    const test = await UserTest.findOne({ where: { id: req.params.id } })

    if (!test) {
      return res.json({ message: 'Test doesn\'t exist.' })
    }

    const score = await sequelize.transaction(async (t) => {
      const solutions = await Question.findAll({ where: { testId: test.testId }, attributes: ['answer'] }, { transaction: t })
      let marks = 0

      solutions.forEach((item, index) => {
        if (choices[index] === item.answer) marks++
      })

      await UserTest.update({ marks, endTime }, { where: { id: req.params.id } }, { transaction: t })
      const result = await UserTest.findOne({ where: { id: req.params.id }, attributes: ['marks'] }, { transaction: t })
      return result
    })
    return res.json({ message: `You have obtained ${score.marks} marks` })
  } catch (error) {
    res.json(error).status(400)
  }
}

module.exports = { getUserTests, takeTest, endTest, getSingleUserTest }
