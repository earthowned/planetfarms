const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const checkCommunity = require('../middleware/checkCommunity')

const { addNews, getNews, updateNews, getNewsById, deleteNews, searchNewsTitle } = require('../controllers/newsController')
const { upload, resizeImage } = require('../helpers/filehelpers')

router.route('/community/:id').get(checkCommunity, getNews)
router.route('/add/community/:id').post(checkCommunity, upload.single('news'), resizeImage, addNews)
router.route('/community/:id/search').get(checkCommunity, searchNewsTitle)
router
  .route('/:newsId/community/:id')
  .get(checkCommunity, getNewsById)
  .delete(checkCommunity, deleteNews)
  .put(checkCommunity, upload.single('news'), resizeImage, updateNews)

module.exports = router
