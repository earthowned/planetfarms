const express = require('express')
const { getCommunities, createCommunity, searchCommunityName, getCommunityById, deleteCommunity, updateCommunity } = require('../controllers/communityController')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')


router.route('/').get(getCommunities)
router.route('/add').post(upload.single('community'), createCommunity)
router.route('/search').get(searchCommunityName)
router
  .route('/:id')
  .get(getCommunityById)
  .delete(deleteCommunity)
  .put(upload.single('community'), updateCommunity)

module.exports = router
