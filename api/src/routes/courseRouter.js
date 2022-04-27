const path = require('path')
const express = require('express')
const multer = require('multer')
const router = express.Router()
const shortid = require('shortid')
const fs = require('fs')
require('express-async-errors')
const protect = require('../middleware/authMiddleware')
const validation = require('../middleware/validation')

const {
  getCourses,
  addCourse,
  updateCourse,
  getCourseById,
  deleteCourse,
  addCourseSchema
} = require('../controllers/courseController.js')
const { upload, resizeImage } = require('../helpers/filehelpers')

router.use(protect)

router
  .route('/')
  .get(getCourses)
  .post(upload.fields([{ name: 'thumbnail' }, { name: 'courses' }]), resizeImage, validation(addCourseSchema), addCourse)
  // .post(addCourse)

router
  .route('/:id')
  .get(getCourseById)
  .delete(deleteCourse)
  .put(upload.single('thumbnail'), resizeImage, updateCourse)

module.exports = router
