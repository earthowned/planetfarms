const express = require('express')
const router = express.Router()
require('express-async-errors')
const { upload, resizeImage } = require('../helpers/filehelpers')

const {
  getPhotos,
  getPhotoById,
  addphoto,
  deletePhoto,
  updatePhoto
} = require('../controllers/photoController')

router.route('/').get(getPhotos)
router.route('/add').post(upload.single('lessonImg'), resizeImage, addphoto)
router.route('/:id').get(getPhotoById).delete(deletePhoto).put(updatePhoto)

module.exports = router
