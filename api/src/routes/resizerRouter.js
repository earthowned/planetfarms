const express = require('express')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')

const {
  resize,
  render
} = require('../controllers/resizerController.js')

router.route('/').post(upload.single('image'), resize)
router.route('/').post(render)
router.route('/resize').post(resize)

module.exports = router
