const { getGroupMembers, followGroup, getAllGroupMembers, searchGroupMemberName } = require('../controllers/groupMemberController')

const router = require('express').Router()

router.get('/', getGroupMembers);
router.post('/follow', followGroup);
router.get('/group/:id', getAllGroupMembers)
router.get('/group/:id/search', searchGroupMemberName)
// router.put('/:id', updateCommunityMember);

module.exports = router
