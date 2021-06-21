const { getCommunityUsers, followCommunity, getAllMembers, searchMemberName } = require('../controllers/communityUserController')

const router = require('express').Router()

router.get('/', getCommunityUsers);
router.post('/follow', followCommunity);
router.get('/community/:id', getAllMembers)
router.get('/community/:id/search', searchMemberName)
// router.put('/:id', updateCommunityUsers);

module.exports = router
