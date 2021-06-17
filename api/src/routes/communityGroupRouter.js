const express = require('express')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')

const { getGroups, addGroups, getGroupsById, 
  deleteGroups, updateGroups, searchGroupsTitle, 
  getCommunityGroups } = require('../controllers/communityGroupController')

router.route('/').get(getGroups)
router.route('/community/:id').get(getCommunityGroups)
router.route('/add').post(upload.single('group'), addGroups)
router.route('/search').get(searchGroupsTitle)
router
  .route('/:id')
  .get(getGroupsById)
  .delete(deleteGroups)
  .put(updateGroups)

module.exports = router
