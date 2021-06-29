const { getCommunityUsers, followCommunity, getAllMembers, searchMemberName } = require('../controllers/communityUserController')
const protect = require('../middleware/authMiddleware');
const router = require('express').Router()

router.get('/', getCommunityUsers);
router.post('/follow', protect, followCommunity);
router.get('/community/:id', getAllMembers)
router.get('/community/:id/search', searchMemberName)
// router.put('/:id', updateCommunityUsers);

module.exports = router
