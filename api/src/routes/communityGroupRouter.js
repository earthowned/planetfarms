const express = require('express')
const router = express.Router()
const { upload, resizeImage } = require('../helpers/filehelpers')
const checkCommunity = require('../middleware/checkCommunity')
const {
  getGroups, addGroups, getGroupsById,
  deleteGroups, updateGroups, searchGroupsTitle, getUserGroups
} = require('../controllers/communityGroupController')
const protect = require('../middleware/authMiddleware')

router.route('/community/:id').get(protect, checkCommunity, getGroups)
router.route('/community/:id/user').get(protect, checkCommunity, getUserGroups)
router.route('/add/community/:id').post(protect, checkCommunity, upload.single('group'), resizeImage, addGroups)
router.route('/community/:id/search').get(checkCommunity, searchGroupsTitle)
router
  .route('/:groupId/community/:id')
  .get(checkCommunity, getGroupsById)
  .delete(protect, checkCommunity, deleteGroups)
  .put(protect, checkCommunity, updateGroups)

module.exports = router
