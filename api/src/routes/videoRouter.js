const express = require('express')
const router = express.Router()
require('express-async-errors')
const { upload } = require('../helpers/filehelpers')

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
    addVideo
  )
router.route('/:id').get(getVideosById).delete(deleteVideo).put(updateVideo)

module.exports = router
