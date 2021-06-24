const { getEnterpriseUsers, followEnterprise, getAllEnterpriseMembers, searchEnterpriseMemberName } = require('../controllers/enterpriseUserController')

const router = require('express').Router()

router.get('/', getEnterpriseUsers);
router.post('/follow', followEnterprise);
router.get('/enterprise/:id', getAllEnterpriseMembers)
router.get('/enterprise/:id/search', searchEnterpriseMemberName)
// router.put('/:id', updateCommunityUsers);

module.exports = router
