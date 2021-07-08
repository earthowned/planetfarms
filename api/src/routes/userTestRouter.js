const express = require('express')
const router = express.Router()
const { getUserTests, takeTest, endTest } = require('../controllers/userTestController')
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(getUserTests)
router.route('/start').post(takeTest)
router.route('/:id').put(endTest);

module.exports = router
