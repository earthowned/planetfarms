const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const {
  registerUser,
  authUser,
  updateUser,
  getUsers,
  getUserById,
  searchUserName,
  changePassword,
  forgotPassword,
  forgotPasswordSubmit,
  resendCode,
  confirmSignUpWithCode
} = require('../controllers/userController.js')

router.route('/')
  .post(registerUser)
  .get(protect, getUsers)
router.post('/login', authUser)
router.route('/search').get(searchUserName)
router
  .route('/:id')
  .get(protect, getUserById)
  .put(protect, updateUser)
router.post('/changePassword', changePassword)
router.post('/forgotPassword', forgotPassword)
router.post('/forgotPasswordSubmit', forgotPasswordSubmit)
router.post('/resendCode', resendCode)
router.post('/confirmSignUp', confirmSignUpWithCode)

module.exports = router
