const express = require('express')
const router = express.Router()

const {
  getLessons,
  getLessonById,
  addLesson,
  deleteLesson,
  updateLesson
} = require('../controllers/lessonController')

router.route('/').get(getLessons)
router.route('/add').post(addLesson)
router
  .route('/:lessonId')
  .get(getLessonById)
  .put(updateLesson)
  .delete(deleteLesson)

module.exports = router
