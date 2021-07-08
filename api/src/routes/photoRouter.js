const express = require('express')
const router = express.Router()
require('express-async-errors')
const { upload } = require('../helpers/filehelpers')

const {
  getPhotos,
  getPhotoById,
  addphoto,
  deletePhoto,
  updatePhoto
} = require('../controllers/photoController')

router.route('/').get(getPhotos)
router.route('/add').post(upload.single('lessonImg'), addphoto)
router
  .route('/:id')
  .get(getPhotoById)
  .delete(deletePhoto)
  .put(updatePhoto)

module.exports = router
