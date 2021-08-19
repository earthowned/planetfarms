const express = require('express')
const router = express.Router()
require('express-async-errors')

const {
  getProgress,
  getProgressById,
  addProgress,
  deleteProgress,
  updateProgress
} = require('../controllers/lessonProgressController')

const protect = require('../middleware/authMiddleware')

router.route('/').get(getProgress)
router.route('/add').post(protect, addProgress)
router
  .route('/:id')
  .get(getProgressById)
  .delete(deleteProgress)
  .put(updateProgress)

module.exports = router
