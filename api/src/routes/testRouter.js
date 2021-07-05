const express = require('express')
const router = express.Router()
const { addTest, getTests, updateTest, getTestById, deleteTest, searchTestTitle, getLessonTests } = require('../controllers/testController')


router.route('/').get(getTests)
router.route('/lesson/:id').get(getLessonTests)
router.route('/add').post(addTest)
router.route('/search').get(searchTestTitle)
router
  .route('/:id')
  .get(getTestById)
  .delete(deleteTest)
  .put(updateTest)

module.exports = router
