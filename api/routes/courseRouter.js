const path = require('path')
const express = require('express')
const multer = require('multer')
const router = express.Router()
const shortid = require('shortid')
const { getCourses, addCourse, updateCourse, getCourseById, deleteCourse, searchCoursesTitle } = require('../controllers/courseController.js')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), '/uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname)
  }
})

function checkFileType (file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    throw new Error('Course not found')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
})

router.route('/').get(getCourses)

// for upload we have just worked with images jpg|jpeg|png for other types of file we need to work.
router.route('/add').post(upload.single('avatar'), addCourse)
router.route('/search').get(searchCoursesTitle)
router
  .route('/:id')
  .get(getCourseById)
  .delete(deleteCourse)
  .put(updateCourse)

module.exports = router
