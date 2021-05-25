const express = require('express')
const router = express.Router()
const { multipleUpload, upload } = require('../helpers/filehelpers')

const { getGroups, addGroups, getGroupsById, deleteGroups, updateGroups, searchGroupsTitle } = require('../controllers/communityGroupController')

router.route('/').get(getGroups)
router.route('/add').post(upload.single('group'), addGroups)
router.route('/search').get(searchGroupsTitle)
router
  .route('/:id')
  .get(getGroupsById)
  .delete(deleteGroups)
  .put(updateGroups)

module.exports = router
