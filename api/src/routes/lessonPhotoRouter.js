const express = require('express')
const router = express.Router()
require('express-async-errors')
const { upload } = require('../helpers/filehelpers')

const {
  getLessonPhotos,
  getLessonPhotoById,
  addlessonPhoto,
  deleteLessonPhoto,
  updateLessonPhoto,
} = require('../controllers/lessonPhotoController')

router.route('/').get(getLessonPhotos)
router.route('/add').post(upload.single('lessonImg'), addlessonPhoto)
router
  .route('/:id')
  .get(getLessonPhotoById)
  .delete(deleteLessonPhoto)
  .put(updateLessonPhoto)

module.exports = router
