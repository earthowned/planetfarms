const { getGroupUsers, followGroup, getAllGroupMembers, searchGroupMemberName } = require('../controllers/groupUserController')

const router = require('express').Router()

router.get('/', getGroupUsers);
router.post('/follow', followGroup);
router.get('/group/:id', getAllGroupMembers)
router.get('/group/:id/search', searchGroupMemberName)
// router.put('/:id', updateCommunityUsers);

module.exports = router
