const express = require('express')
const router = express.Router()

const {
  getLessons,
  getLessonById,
  addLesson,
  deleteLesson,
  updateLesson,
} = require('../controllers/lessonController')
const { upload, resizeImage } = require('../helpers/filehelpers')

router.route('/').get(getLessons)
router.route('/add').post(upload.single('coverImg'), addLesson)
router.route('/:id').get(getLessonById).put(updateLesson).delete(deleteLesson)

module.exports = router
