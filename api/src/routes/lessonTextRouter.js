const express = require('express')
const router = express.Router()
require('express-async-errors')

const {
  getLessonText,
  getLessonTextById,
  addLessonText,
  deleteLessonText,
  updateLessonText,
} = require('../controllers/lessonTextController')

router.route('/').get(getLessonText)
router.route('/add').post(addLessonText)
router
  .route('/:id')
  .get(getLessonTextById)
  .delete(deleteLessonText)
  .put(updateLessonText)

module.exports = router
