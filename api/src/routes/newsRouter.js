const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const checkCommunity = require('../middleware/checkCommunity')

const { addNews, getNews, updateNews, getNewsById, deleteNews } = require('../controllers/newsController')
const { upload, resizeImage } = require('../helpers/filehelpers')

router.route('/community/').get(protect, getNews)
router.route('/community/:id').get(protect, checkCommunity, getNews)
router.route('/add').post(protect, addNews)
router
  .route('/:newsId')
  .get(protect, checkCommunity, getNewsById)
  .delete(protect, checkCommunity, deleteNews)
  .put(protect, checkCommunity, upload.single('news'), resizeImage, updateNews)

module.exports = router
