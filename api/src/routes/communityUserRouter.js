const { followCommunity, getAllMembers, searchMemberName, updateMemberRole, getAllMemberDetails } = require('../controllers/communityUserController')
const protect = require('../middleware/authMiddleware')
const permit = require('../middleware/permission')
const router = require('express').Router()

router.post('/follow', protect, followCommunity)
router.get('/community/:id', protect, getAllMembers)
router.get('/community/:id/search', searchMemberName)
router.put('/:memberId/community/:id/', protect, permit(['manager']), updateMemberRole)
// router.put('/:id', updateCommunityUsers);
router.get('/admin/community/:id', protect, permit(['manager']), getAllMemberDetails)
module.exports = router
