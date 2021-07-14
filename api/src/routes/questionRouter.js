const express = require('express')
const router = express.Router()
const {
  addQuestion, getQuestions, updateQuestion, getQuestionById, deleteQuestion,
  getTestQuestions
} = require('../controllers/questionController')

router.route('/').get(getQuestions)
router.route('/test/:id').get(getTestQuestions)
router.route('/add').post(addQuestion)
// router.route('/search').get(searchQuestionTitle)
router
  .route('/:id')
  .get(getQuestionById)
  .delete(deleteQuestion)
  .put(updateQuestion)

module.exports = router
