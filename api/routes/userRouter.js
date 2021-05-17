const express = require('express')
const router = express.Router()
const { registerUser, authUser, changePassword } = require('../controllers/userController.js')

router.route('/').post(registerUser)
router.post('/login', authUser)
router.post('/changePassword', changePassword)

module.exports = router
