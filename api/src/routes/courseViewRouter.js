const express = require('express')
const { addCourseView } = require('../controllers/courseViewController')
const router = express.Router()
require('express-async-errors')
const protect = require('../middleware/authMiddleware')


// router.route('/').get(getEnroll).put(protect, leaveCourse);
router.route('/add').post(protect, addCourseView)
// router.route('/:id').get(getEnrollById).delete(deleteEnroll);

module.exports = router
