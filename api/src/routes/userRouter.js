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
  getUserProfileByUserID,
  getMyProfile,
  getUsers,
  updateUser,
  searchUserName
} = require('../controllers/userController.js')
const { protect } = require('../middleware/authMiddleware')
const { upload } = require('../helpers/filehelpers')

router.route('/').post(registerUser).get(protect, getUsers)
router.route('/profile').get(protect, getMyProfile).put(protect, upload.single('attachments'), updateUser)
router.route('/:id').get(protect, getUserById).put(protect, updateUser)
router.route('/profile/:userID').get(protect, getUserProfileByUserID).put(protect, updateUser)
router.post('/login', authUser)
router.route('/search').get(searchUserName)
router.post('/changePassword', changePassword)
router.post('/forgotPassword', forgotPassword)
router.post('/forgotPasswordSubmit', forgotPasswordSubmit)
router.post('/resendCode', resendCode)
router.post('/confirmSignUp', confirmSignUpWithCode)

module.exports = router
