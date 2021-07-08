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
  const order = req.query.order || 'ASC'

  let userId = 1;
  UserTest.findAll({ offset: page, limit: pageSize})
    .then(tests => res.json({ tests, page, pageSize }).status(200))
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual Test
// @route   POST /api/Test/add
// @access  Public
const takeTest = async (req, res) => {
  try {
    const {
    test_name, lessonId, description, questions
  } = req.body
  
  if(questions.length < 1) return res.json({message: 'Please provide questions for the test.'});  const result = await sequelize.transaction(async (t) => {

    const test = await Test.create({
      test_name,
      lessonId,
      description
    }, { transaction: t });
    
    const newQuestions = []

    questions.forEach(async (item) => {
      const questionObj = {
        ...item,
        testId: test.id,
        options: [...item.options, item.answer]
      }
      newQuestions.push(questionObj)
    })
    // await questions.map(async (item) => await Question.create({...item, testId: test.id}, {transaction: t}));
    await  Question.bulkCreate(newQuestions, {transaction: t})
    return "test is created with questions.";
  });

  if(result) res.json({ message: result }).status(200);

  } catch (error) {
    res.json(error).status(400);
  }
}

module.exports = { getUserTests, takeTest}
