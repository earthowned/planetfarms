const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const validation = require('../middleware/validation')

const {
  getCourses,
  addCourse,
  updateCourse,
  getCourseById,
  deleteCourse,
  courseSchema,
} = require('../controllers/courseController.js')
const {
  getLessons,
  getLessonById,
  addLesson,
  deleteLesson,
  updateLesson,
  lessonSchema
} = require('../controllers/lessonController')

router.use(protect)

router
  .route('/')
  .get(getCourses)
  .post(
    validation(courseSchema),
    addCourse
  )

router
  .route('/:id')
  .get(getCourseById)
  .delete(deleteCourse)
  .put(
    validation(courseSchema),
    updateCourse
  )

// Course Lessons
router
  .route('/:courseId/lessons')
  .get(getLessons)
  .post(
    validation(lessonSchema),
    addLesson
  )

router
  .route('/:courseId/lessons/:id')
  .get(getLessonById)
  .delete(deleteLesson)
  .put(
    validation(lessonSchema),
    updateLesson
  )

module.exports = router
