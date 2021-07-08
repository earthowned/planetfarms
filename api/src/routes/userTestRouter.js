const express = require('express')
const router = express.Router()
const { getUserTests, takeTest, endTest, getSingleUserTest } = require('../controllers/userTestController')
const {protect} = require('../middleware/authMiddleware');

router.route('/test/:id').get(getUserTests)
router.route('/start').post(takeTest)
router.route('/:id').put(endTest).get(getSingleUserTest);

module.exports = router
