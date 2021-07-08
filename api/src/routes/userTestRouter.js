const express = require('express')
const router = express.Router()
const { getUserTests } = require('../controllers/userTestController')
const {protect} = require('../middleware/authMiddleware');

router.route('/').get(getUserTests)


module.exports = router
