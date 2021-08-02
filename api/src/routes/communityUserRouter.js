const { getCommunityUsers, followCommunity, getAllMembers, searchMemberName, getAllMemberDetails, updateMemberRole } = require('../controllers/communityUserController')
const protect = require('../middleware/authMiddleware')
const permit = require('../middleware/permission')
const router = require('express').Router()

router.get('/', getCommunityUsers)
router.post('/follow', protect, followCommunity)
router.get('/community/:id', protect, permit(['manager']), getAllMembers)
router.get('/community/:id/search', searchMemberName)
router.put('/:memberId/community/:id/', protect, permit(['manager']), updateMemberRole)
// router.put('/:id', updateCommunityUsers);
router.get('/community/:id/details', protect, permit(['manager']), getAllMemberDetails)
module.exports = router
