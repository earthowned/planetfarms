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

module.exports = router
