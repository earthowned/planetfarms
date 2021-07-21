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

      const mcqQuestions = []
      const subjectiveQuestions = []

      questions.forEach(async (item, index) => {
        let pos = index + 1;
       //seperating mcq and subjective questions
       populateQuestions(item, mcqQuestions, subjectiveQuestions, test, pos)
      })
      // await questions.map(async (item) => await Question.create({...item, testId: test.id}, {transaction: t}));
      await db.Question.bulkCreate(mcqQuestions, { transaction: t })
      await db.Question.bulkCreate(subjectiveQuestions, { transaction: t })
      return 'test is created with questions.'
    })

    if (result) res.json({ message: result }).status(200)
  } catch (error) {
    res.json(error).status(400)
  }
}

// this populates the array and separate the questions
function populateQuestions (item, mcqQuestions, subjectiveQuestions, test, pos) {
  
   if(item.type === "subjective") {
           const questionObj = {
          question: item.question,
          type: item.type,
          position: pos,
          testId: test.id
        }
          subjectiveQuestions.push(questionObj)
        } else {
          const questionObj = {
            question: item.question,
            answer: item.answer,
            type: item.type,
            position: pos,
            testId: test.id,
            options: [...item.options, item.answer]
          }
  
          const {question, answer, options} = questionObj
          //Checking empty values
          if(question && answer && !options.includes('')){
            mcqQuestions.push(questionObj)
          }
        }
}

// @desc    Update a db.Test
// @route   PUT /api/tests/:id
// @access  Public
const updateTest = async (req, res) => {
  try {
    const {
      questions
    } = req.body
    const id = req.params.id

    const test = await db.Test.findByPk(id);
    if (!test) return res.json({ message: 'Test doesn\'t exists' });

    const result = await db.sequelize.transaction(async (t) => {
        // seperating old and new quetions
        const oldQuestions = []
        const subjectiveQuestions = []
        const mcqQuestions = []

        questions.forEach(async (item, index)=> {
          let pos = index + 1;
          console.log(pos);
          if (item.testId) {
            oldQuestions.push({...item, position: pos})
          } else {
            //seperating mcq and subjective questions
          populateQuestions(item, mcqQuestions, subjectiveQuestions, test, pos)
          }
        })

        //positioning

        //bulk updating 
        oldQuestions.forEach(async (item) => {
          const {question, answer, options, id, type, position} = item
          console.log(position);
          await db.Question.update({question, answer, options, type, position}, {where: {id}}, {transaction: t})
        })

        //adding new questions to the test
        await db.Question.bulkCreate(mcqQuestions, {transaction: t})
        await db.Question.bulkCreate(subjectiveQuestions, {transaction: t})

        return "Test is successfully updated."
  })

  res.json({message: result}).status(200)
  
  } catch (error) {
    res.json(error)
  }
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
