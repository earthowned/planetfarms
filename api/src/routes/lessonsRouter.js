const express = require('express')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

const {
  getLessons,
  getLessonById,
  addLesson,
  deleteLesson,
  updateLesson
} = require('../controllers/lessonController')
const { upload, resizeImage } = require('../helpers/filehelpers')

router.use(protect)

router
  // .route('/')
  .route('/courses/:courseId')
  .get(getLessons)
  .post(
    upload.fields([{ name: 'thumbnail' }, { name: 'courses' }]),
    resizeImage,
    // validation(courseSchema),
    addLesson
  )

router
  .route('/:id')
  .get(getLessonById)
  .put(
    upload.fields([{ name: 'thumbnail' }, { name: 'lessons' }]),
    resizeImage,
    // validation(courseSchema),
    updateLesson
  )
  .delete(deleteLesson)

module.exports = router
