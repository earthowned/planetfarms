const express = require('express')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')
const checkCommunity = require('../middleware/checkCommunity')
const {
  getGroups, addGroups, getGroupsById,
  deleteGroups, updateGroups, searchGroupsTitle, getUserGroups
} = require('../controllers/communityGroupController');
const private = require('../middleware/authMiddleware');

router.route('/community/:id').get(private, checkCommunity, getGroups)
router.route('/community/:id/user').get(private, checkCommunity, getUserGroups)
router.route('/add/community/:id').post(private, checkCommunity, upload.single('group'), addGroups)
router.route('/community/:id/search').get(checkCommunity, searchGroupsTitle)
router
  .route('/:groupId/community/:id')
  .get(checkCommunity, getGroupsById)
  .delete(private, checkCommunity, deleteGroups)
  .put(private, checkCommunity, updateGroups)

module.exports = router
