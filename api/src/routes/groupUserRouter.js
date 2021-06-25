const { getGroupUsers, followGroup, getAllGroupUsers, searchGroupUserName } = require('../controllers/groupUserController')

const router = require('express').Router()

router.get('/', getGroupUsers);
router.post('/follow', followGroup);
router.get('/group/:id', getAllGroupUsers)
router.get('/group/:id/search', searchGroupUserName)
// router.put('/:id', updateCommunityMember);

module.exports = router
