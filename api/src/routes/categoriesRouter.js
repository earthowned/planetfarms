const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory,
  getSingleCategory
} = require('../controllers/categoryController')
const permit = require('../middleware/permission')

router.route('/').get(protect, getCategories).post(protect, permit('user', ['sysadmin']), addCategory)
router.route('/:id').get(getSingleCategory).put(protect, permit('user', ['sysadmin']), updateCategory).delete(protect, permit(['sysadmin']), deleteCategory)

module.exports = router
