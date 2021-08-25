const express = require('express')
const router = express.Router()

const {
  getLessons,
  getLessonById,
  addLesson,
  deleteLesson,
  updateLesson
} = require('../controllers/lessonController')
const { upload, resizeImage } = require('../helpers/filehelpers')

router.route('/course/:courseId').get(getLessons)
router.route('/add').post(upload.single('coverImg'), resizeImage, addLesson)
router
  .route('/:id')
  .get(getLessonById)
  .put(upload.single('coverImg'), resizeImage, updateLesson)
  .delete(deleteLesson)

module.exports = router
