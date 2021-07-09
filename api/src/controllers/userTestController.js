const db = require('../models/index')
const Sequelize = require('sequelize')



// @desc    Fetch all tests
// @route   GET /api/Test
// @access  Public
const getUserTests = (req, res) => {
  const pageSize = 3
  const page = Number(req.query.pageNumber) || 0

  db.UserTest.findAll({ offset: page, limit: pageSize, where: { userId: req.user.id, testId: req.params.id } })
    .then(tests => res.json({ tests, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

const getSingleUserTest = async (req, res) => {
  try {
    
    const userTest = await db.UserTest.findOne({ where: { id: req.params.id, userId: req.user.id } })
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
    
    
    const test = await db.Test.findOne({ where: { lessonId: parseInt(lessonId) } })
    
    if (!test) {
      return res.json({ message: 'Test doesn\'t exist.' })
    }

    const totalMarks = await db.Question.findAndCountAll({where: {testId: test.id}});
    
    const userTest = await db.UserTest.create({ lessonId, userId: req.user.id, startTime, testId: test.id, total_marks: totalMarks.count })
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
    
    if (!test) {
      return res.json({ message: 'Test doesn\'t exist.' })
    }

    const score = await db.sequelize.transaction(async (t) => {
      const solutions = await db.Question.findAll({ where: { testId: test.testId }, attributes: ['answer'] }, { transaction: t })
      let marks = 0

      solutions.forEach((item, index) => {
        if (choices[index] === item.answer) marks++
      })

      await db.UserTest.update({ marks, endTime }, { where: { id: req.params.id } }, { transaction: t })
      const result = await db.UserTest.findOne({ where: { id: req.params.id }, attributes: ['marks', 'total_marks'] }, { transaction: t })
      return result
    })

    // console.log(score);
    let passMarks = Math.floor(score.total_marks / 2);

    if(score.marks >= passMarks) {
      await db.UserTest.update({is_passed: true}, {where: {id: req.params.id}});
      return res.json({message: `You have passed the test.`})
    }

    await db.UserTest.update({is_passed: false}, {where: {id: req.params.id}});
    res.json({message: `You have failed the test.`})
  } catch (error) {
    res.json(error).status(400)
  }
}

module.exports = { getUserTests, takeTest, endTest, getSingleUserTest }