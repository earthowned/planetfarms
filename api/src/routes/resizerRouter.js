const express = require('express')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')

const {
  resizeImage,
  renderImage
} = require('../controllers/resizerController.js')

router.route('/').post(upload.single('image'), resizeImage)
router.route('/').post(renderImage)

module.exports = router
