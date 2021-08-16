const express = require('express')
const router = express.Router()
require('express-async-errors')
const protect = require('../middleware/authMiddleware')

const {
  getEnroll,
  getEnrollById,
  addEnroll,
  deleteEnroll,
  updateEnroll
} = require('../controllers/enrollController')

router.route('/').get(getEnroll)
router.route('/add').post(protect, addEnroll)
router.route('/:id').get(getEnrollById).delete(deleteEnroll).put(updateEnroll)

module.exports = router
