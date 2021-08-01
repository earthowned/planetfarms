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

router.route('/').get(getProgress)
router.route('/add').post(addProgress)
router
  .route('/:id')
  .get(getProgressById)
  .delete(deleteProgress)
  .put(updateProgress)

module.exports = router
