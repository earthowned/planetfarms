const { getCommunityUsers, followCommunity, getAllMembers } = require('../controllers/communityUserController')

const router = require('express').Router()

router.get('/', getCommunityUsers);
router.post('/follow', followCommunity);
router.get('/community/:id', getAllMembers)
// router.put('/:id', updateCommunityUsers);

module.exports = router
