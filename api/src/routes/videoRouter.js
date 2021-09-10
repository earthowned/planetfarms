const express = require('express')
const router = express.Router()
require('express-async-errors')
const { upload, resizeImage } = require('../helpers/filehelpers')

const {
  getVideos,
  getVideosById,
  addVideo,
  deleteVideo,
  updateVideo
} = require('../controllers/videoController')

// get image file middleware
const fileChanger = (req, _res, next) => {
  if (req.files.videoCover === undefined) {
    req.file = ''
    next()
  } else {
    req.file = req.files.videoCover[0]
    next()
  }
}

router.route('/').get(getVideos)
router
  .route('/add')
  .post(
    upload.fields([{ name: 'videoCover' }, { name: 'videoResource' }]),
    fileChanger,
    resizeImage,
    addVideo
  )
router.route('/:id').get(getVideosById).delete(deleteVideo).put(
  upload.fields([{ name: 'videoCover' }, { name: 'videoResource' }]),
  fileChanger,
  resizeImage,
  updateVideo)

module.exports = router
