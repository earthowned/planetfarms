const { getEnterpriseUsers, followEnterprise, getAllEnterpriseUsers, searchEnterpriseUserName } = require('../controllers/enterpriseUserController')
const protect = require('../middleware/authMiddleware');
const router = require('express').Router()

router.get('/', getEnterpriseUsers);
router.post('/follow', protect, followEnterprise);
router.get('/enterprise/:id', getAllEnterpriseUsers)
router.get('/enterprise/:id/search', searchEnterpriseUserName)
// router.put('/:id', updateCommunityMembers);

module.exports = router
