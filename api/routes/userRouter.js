const express = require('express')
const router = express.Router()
const {
  registerUser,
  authUser,
  changePassword,
  forgotPassword,
  forgotPasswordSubmit,
  resendCode,
  confirmSignUpWithCode
} = require('../controllers/userController.js')

router.route('/').post(registerUser)
router.post('/login', authUser)
router.post('/changePassword', changePassword)
router.post('/forgotPassword', forgotPassword)
router.post('/forgotPasswordSubmit', forgotPasswordSubmit)
router.post('/resendCode', resendCode)
router.post('/confirmSignUp', confirmSignUpWithCode)

module.exports = router
