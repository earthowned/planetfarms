const { getCommunityUsers, followCommunity } = require('../controllers/communityUserController')

const router = require('express').Router()

router.get('/', getCommunityUsers);
router.post('/follow', followCommunity);
// router.put('/:id', updateCommunityUsers);

module.exports = router
