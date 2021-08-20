const express = require('express')
const router = express.Router()
require('express-async-errors')
const protect = require('../middleware/authMiddleware')

const {
  getEnroll,
  getEnrollById,
  addEnroll,
  deleteEnroll,
  leaveCourse
} = require('../controllers/enrollController')

router.route('/').get(getEnroll).put(protect, leaveCourse)
router.route('/add').post(protect, addEnroll)
router.route('/:id').get(getEnrollById).delete(deleteEnroll)

module.exports = router
