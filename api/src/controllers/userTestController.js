const db = require('../models/index')
const Sequelize = require('sequelize')

// @desc    Fetch all tests
// @route   GET /api/user_tests/lesson/:lessonId
// @access  Public
const getUserTests = async (req, res) => {
  try {
    const pageSize = 3
    const page = Number(req.query.pageNumber) || 0

    const test = await db.Test.findOne({
      where: { lessonId: req.params.lessonId }
    })

    if (!test) return res.json({ test }).status(400)

    const tests = await db.UserTest.findAll({
      where: { userId: req.user.id, testId: test.id }
    })

    res.json({ tests, test }).status(400)
  } catch (error) {
    res.json(error).status(400)
  }
}

const getSingleUserTest = async (req, res) => {
  try {
    const userTest = await db.UserTest.findOne({
      where: { id: req.params.id, userId: req.user.id }
    })
    res.json(userTest)
  } catch (error) {
    res.json(error).status(400)
  }
}

// @desc    Get all answers provided by the user in particular test
// @route   POST /api/user_tests/:id/answers
// @access  Public

const getUserTestAnswers = async (req, res) => {
  try {
    const userAnswers = await db.UserTestAnswer.findAll({
      where: { userTestId: req.params.id },
      include: [db.Question]
    })
    res.json(userAnswers)
  } catch (error) {
    res.json(error)
  }
}

// @desc    Add individual Test
// @route   POST /api/Test/add
// @access  Public
const takeTest = async (req, res) => {
  try {
    const { lessonId, startTime } = req.body

    const test = await db.Test.findOne({
      where: { lessonId: parseInt(lessonId) }
    })

    if (!test) {
      return res.json({ message: "Test doesn't exist." })
    }

    const totalMarks = await db.Question.findAndCountAll({
      where: { testId: test.id }
    })

    const userTest = await db.UserTest.create({
      lessonId,
      userId: req.user.id,
      startTime,
      testId: test.id,
      total_marks: totalMarks.count
    })
    res.json({ message: 'Test has started.', id: userTest.id })
  } catch (error) {
    res.json(error).status(400)
  }
}

// @desc    Add individual Test
// @route   POST /api/Test/add
// @access  Public
const endTest = async (req, res) => {
  try {
    const { endTime, choices } = req.body
    const test = await db.UserTest.findOne({ where: { id: req.params.id } })
    console.log(choices)
    if (!test) {
      return res.json({ message: "Test doesn't exist." })
    }

    const score = await db.sequelize.transaction(async (t) => {
      const solutions = await db.Question.findAll(
        {
          where: { testId: test.testId },
          attributes: ['question', 'answer', 'type'],
          order: [['position', 'ASC']]
        },
        { transaction: t }
      )
      let marks = 0

      // counting marks
      solutions.forEach((item, index) => {
        if (item.type === 'subjective') {
          if (choices[index]) marks++
        } else {
          if (choices[index] === item.answer) marks++
        }
      })

      // addomg amswers to the user_test_answers tbl
      solutions.forEach(async (item, index) => {
        await db.UserTestAnswer.create({
          question: item.question,
          userTestId: test.id,
          answer: choices[index]
        })
      })

      await db.UserTest.update(
        { marks, endTime },
        { where: { id: req.params.id } },
        { transaction: t }
      )
      const result = await db.UserTest.findOne(
        { where: { id: req.params.id }, attributes: ['marks', 'total_marks'] },
        { transaction: t }
      )
      return result
    })

    // console.log(score)
    const passMarks = Math.ceil(score.total_marks / 2)
    // console.log(passMarks)
    if (score.marks >= passMarks) {
      await db.UserTest.update(
        { is_passed: true },
        { where: { id: req.params.id } }
      )
      return res.json({ message: 'You have passed the test.' })
    }

    await db.UserTest.update(
      { is_passed: false },
      { where: { id: req.params.id } }
    )
    res.json({ message: 'You have failed the test.' })
  } catch (error) {
    res.json(error).status(400)
  }
}

module.exports = {
  getUserTests,
  takeTest,
  endTest,
  getSingleUserTest,
  getUserTestAnswers
}
