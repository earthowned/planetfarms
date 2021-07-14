const express = require('express')
const router = express.Router()

const {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory
} = require('../controllers/categoryController')

router.route('/').get(getCategories).post(addCategory)
router.route('/:id').put(updateCategory).delete(deleteCategory)

module.exports = router
