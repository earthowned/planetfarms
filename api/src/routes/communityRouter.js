const express = require('express')
const {
  getCommunities, createCommunity, searchCommunityName, getCommunityById, deleteCommunity,
  updateCommunity, getUserCommunities, searchUserCommunityName
} = require('../controllers/communityController')
const router = express.Router()
const { upload, resizeImage } = require('../helpers/filehelpers')
const protect = require('../middleware/authMiddleware')

router.route('/').get(protect, getCommunities)
router.route('/add').post(protect, upload.single('community'), resizeImage, createCommunity)
router.route('/search').get(searchCommunityName)
router.route('/user').get(protect, getUserCommunities)
router.route('/user/search').get(protect, searchUserCommunityName)
router
  .route('/:id')
  .get(getCommunityById)
  .delete(protect, deleteCommunity)
  .put(protect, upload.single('community'), updateCommunity)

module.exports = router
