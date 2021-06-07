const express = require('express')
const { getCommunities, createCommunity, searchCommunityName, getCommunityById, deleteCommunity, updateCommunity } = require('../controllers/communityController')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getCommunities)
router.route('/add').post(protect, upload.single('community'), createCommunity)
router.route('/search').get(searchCommunityName)
router
  .route('/:id')
  .get(getCommunityById)
  .delete(protect, deleteCommunity)
  .put(protect, upload.single('community'), updateCommunity)

module.exports = router
