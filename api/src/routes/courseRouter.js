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
  createCourseImages
} = require('../controllers/courseController.js')
const { uploadWithMapping, resizeImage } = require('../helpers/filehelpers')

const uploadHandler = uploadWithMapping({
  images: 'courses',
  thumbnail: 'thumbnail'
}).fields([{ name: 'thumbnail' }, { name: 'images' }])

router.use(protect)

router
  .route('/')
  .get(getCourses)
  .post(
    uploadHandler,
    resizeImage,
    validation(courseSchema),
    addCourse
  )

router
  .route('/images')
  .post(uploadHandler, createCourseImages)

router
  .route('/:id')
  .get(getCourseById)
  .delete(deleteCourse)
  .put(
    uploadHandler,
    resizeImage,
    validation(courseSchema),
    updateCourse
  )

module.exports = router
