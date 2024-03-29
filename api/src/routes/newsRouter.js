const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const checkCommunity = require('../middleware/checkCommunity')

const { addNews, getNews, updateNews, getNewsById, deleteNews } = require('../controllers/newsController')
const { upload, resizeImage } = require('../helpers/filehelpers')

router.route('/').get(protect, getNews)
router.route('/community/:id').get(protect, checkCommunity, getNews)
router.route('/add').post(protect, upload.single('news'), resizeImage, checkCommunity, addNews)
router
  .route('/:newsId')
  .get(protect, getNewsById)
  .delete(protect, deleteNews)
  .put(protect, upload.single('news'), resizeImage, updateNews)

module.exports = router
