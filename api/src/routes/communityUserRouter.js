const { followCommunity, getAllMembers, searchMemberName, updateMemberRole } = require('../controllers/communityUserController')
const protect = require('../middleware/authMiddleware')
const permit = require('../middleware/permission')
const router = require('express').Router()

router.post('/follow', protect, followCommunity)
router.get('/community/:id', protect, permit('community-member', ['manager','member']), getAllMembers)
router.get('/community/:id/search', searchMemberName)
router.put('/:memberId/community/:id/', protect, permit('community-member', ['manager']), updateMemberRole)

module.exports = router
