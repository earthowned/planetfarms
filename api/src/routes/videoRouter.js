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

router.route('/').get(getVideos)
router
  .route('/add')
  .post(
    upload.fields([{ name: 'videoCover' }, { name: 'videoResource' }]),
    resizeImage,
    addVideo
  )
router.route('/:id').get(getVideosById).delete(deleteVideo).put(updateVideo)

module.exports = router
