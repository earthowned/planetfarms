const express = require('express')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')

const {
  resizeImage,
  renderImage
} = require('../controllers/resizerController.js')

router.route('/').post(upload.single('image'), resize)
router.route('/').post(render)

module.exports = router
