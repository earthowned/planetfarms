const { getCommunityUsers, followCommunity, getAllMembers, searchMemberName, getAllMemberDetails, updateMemberRole } = require('../controllers/communityUserController')
const protect = require('../middleware/authMiddleware')
const memberPermit = require('../middleware/memberPermit')
const router = require('express').Router()

router.get('/', getCommunityUsers)
router.post('/follow', protect, followCommunity)
router.get('/community/:id', protect, memberPermit('manager'), getAllMembers)
router.get('/community/:id/search', searchMemberName)
router.put('/:memberId/community/:id/', protect, memberPermit('manager'), updateMemberRole)
// router.put('/:id', updateCommunityUsers);
router.get('/community/:id/details', protect, memberPermit('manager'), getAllMemberDetails)
module.exports = router
