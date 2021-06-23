const express = require('express')
const router = express.Router()
const {
  registerUser,
  authUser,
  changePassword,
  forgotPassword,
  forgotPasswordSubmit,
  resendCode,
  confirmSignUpWithCode,
  getUserById,
  getUsers,
  updateUser,
  searchUserName
} = require('../controllers/userController.js')
const { protect } = require('../middleware/authMiddleware')

router.route('/').post(registerUser).get(protect, getUsers)
router.route('/:id').get(getUserById).put(updateUser)
router.post('/login', authUser)
router.route('/search').get(searchUserName)
router.post('/changePassword', changePassword)
router.post('/forgotPassword', forgotPassword)
router.post('/forgotPasswordSubmit', forgotPasswordSubmit)
router.post('/resendCode', resendCode)
router.post('/confirmSignUp', confirmSignUpWithCode)

module.exports = router
