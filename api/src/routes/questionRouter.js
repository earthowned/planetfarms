const express = require('express')
const router = express.Router()
const {
  addQuestion, getQuestions, updateQuestion, getQuestionById, deleteQuestion,
  getTestQuestions,
  getLessonQuestions
} = require('../controllers/questionController')

router.route('/').get(getQuestions)
router.route('/test/:id').get(getTestQuestions)
router.route('/lesson/:id').get(getLessonQuestions)
router.route('/add').post(addQuestion)

router
  .route('/:id')
  .get(getQuestionById)
  .delete(deleteQuestion)
  .put(updateQuestion)

module.exports = router
