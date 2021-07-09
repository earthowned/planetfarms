const express = require('express')
const router = express.Router()
const { getUserTests, takeTest, endTest, getSingleUserTest } = require('../controllers/userTestController')
const  protect = require('../middleware/authMiddleware')

router.route('/test/:id').get(protect, getUserTests)
router.route('/start').post(protect, takeTest)
router.route('/:id').put(endTest).get(protect, getSingleUserTest)

module.exports = router
