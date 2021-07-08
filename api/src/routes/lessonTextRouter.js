const express = require('express')
const router = express.Router()
require('express-async-errors')

const {
  getText,
  getTextById,
  addText,
  deleteText,
  updateText,
} = require('../controllers/textController')

router.route('/').get(getText)
router.route('/add').post(addText)
router
  .route('/:id')
  .get(getTextById)
  .delete(deleteText)
  .put(updateText)

module.exports = router
