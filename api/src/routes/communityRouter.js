const express = require('express')
const { getCommunities, createCommunity, searchCommunityName, getCommunityById, deleteCommunity, 
  updateCommunity, getUserCommunities, searchUserCommunityName } = require('../controllers/communityController')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getCommunities)
router.route('/add').post(upload.single('community'), createCommunity)
router.route('/search').get(searchCommunityName)
router.route('/user/:id').get(getUserCommunities)
router.route('/user/:id/search').get(searchUserCommunityName)
router
  .route('/:id')
  .get(getCommunityById)
  .delete(deleteCommunity)
  .put(upload.single('community'), updateCommunity)

module.exports = router
