const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { addNews, getNews, updateNews, getNewsById, deleteNews, searchNewsTitle } = require('../controllers/newsController')

router.route('/').get(getNews)
// router.route('/add').post(multipleUpload, protect, addNews)
router.route('/add').post(protect, addNews)
router.route('/search').get(searchNewsTitle)
router
  .route('/:id')
  .get(getNewsById)
  .delete(protect, deleteNews)
  .put(updateNews)

module.exports = router
