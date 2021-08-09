const express = require('express')
const router = express.Router()
const {
  registerUser,
  authUser,
  changePassword,
  forgotPassword,
  forgotPasswordSubmit,
  confirmSignUpWithCode,
  getUserProfileByUserID,
  getMyProfile,
  getUsers,
  updateUser,
  searchUserName,
  sendTokenStatus
} = require('../controllers/userController.js')
require('express-async-errors')

const protect = require('../middleware/authMiddleware')
const { upload, resizeImage } = require('../helpers/filehelpers')

router.route('/').post(registerUser).get(protect, getUsers)
router
  .route('/profile')
  .get(protect, getMyProfile)
  .put(protect, upload.single('attachments'), resizeImage, updateUser)
router
  .route('/profile/:userID')
  .get(protect, getUserProfileByUserID)
  .put(protect, updateUser)
router.post('/login', authUser)
router.route('/token').get(protect, sendTokenStatus)
router.route('/search').get(searchUserName)
router.route('/changePassword').post(protect, changePassword)
router.post('/forgotPassword', forgotPassword)
router.post('/forgotPasswordSubmit', forgotPasswordSubmit)
router.post('/confirmSignUp', confirmSignUpWithCode)

module.exports = router
