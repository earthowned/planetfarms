const express = require('express')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')
const checkCommunity = require('../middleware/checkCommunity')

const {
  getGroups, addGroups, getGroupsById,
  deleteGroups, updateGroups, searchGroupsTitle, getUserGroups
} = require('../controllers/communityGroupController')

router.route('/community/:id').get(checkCommunity, getGroups)
router.route('/community/:id/user/:userId').get(checkCommunity, getUserGroups)
router.route('/add/community/:id').post(checkCommunity, upload.single('group'), addGroups)
router.route('/community/:id/search').get(checkCommunity, searchGroupsTitle)
router
  .route('/:groupId/community/:id')
  .get(checkCommunity, getGroupsById)
  .delete(checkCommunity, deleteGroups)
  .put(checkCommunity, updateGroups)

module.exports = router
