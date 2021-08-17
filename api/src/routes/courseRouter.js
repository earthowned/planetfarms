const path = require('path')
const express = require('express')
const multer = require('multer')
const router = express.Router()
const shortid = require('shortid')
const fs = require('fs')
require('express-async-errors')
const protect = require('../middleware/authMiddleware')

const {
  getCourses,
  addCourse,
  updateCourse,
  getCourseById,
  deleteCourse
} = require('../controllers/courseController.js')
const { upload, resizeImage } = require('../helpers/filehelpers')

router.route('/').get(protect, getCourses)

// for upload we have just worked with images jpg|jpeg|png for other types of file we need to work.
router.route('/add').post(upload.single('thumbnail'), resizeImage, addCourse)
router
  .route('/:id')
  .get(protect, getCourseById)
  .delete(deleteCourse)
  .put(upload.single('thumbnail'), resizeImage, updateCourse)

module.exports = router
