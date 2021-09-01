const {
  getCommunityUsers,
  followCommunity,
  getAllMembers
} = require('../controllers/communityUserController')
const protect = require('../middleware/authMiddleware')
const router = require('express').Router()

router.get('/', getCommunityUsers)
router.post('/follow', protect, followCommunity)
router.get('/community/:id', getAllMembers)

module.exports = router
