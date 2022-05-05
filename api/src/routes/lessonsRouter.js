const express = require('express')
const protect = require('../middleware/authMiddleware')
const validation = require('../middleware/validation')
const {
  getLessons,
  getLessonById,
  addLesson,
  deleteLesson,
  updateLesson,
  lessonSchema
} = require('../controllers/lessonController')
const router = express.Router()

const { upload, resizeImage } = require('../helpers/filehelpers')

router.use(protect)

router
  .route('/')
  .get(getLessons)
  .post(
    upload.fields([{ name: 'thumbnail' }, { name: 'courses' }]),
    resizeImage,
    validation(lessonSchema),
    addLesson
  )

router
  .route('/:id')
  .get(getLessonById)
  .put(
    upload.fields([{ name: 'thumbnail' }, { name: 'lessons' }]),
    resizeImage,
    validation(lessonSchema),
    updateLesson
  )
  .delete(deleteLesson)

module.exports = router
