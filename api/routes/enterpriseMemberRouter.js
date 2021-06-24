const { getEnterpriseMembers, followEnterprise, getAllEnterpriseMembers, searchEnterpriseMemberName } = require('../controllers/enterpriseMemberController')

const router = require('express').Router()

router.get('/', getEnterpriseMembers);
router.post('/follow', followEnterprise);
router.get('/enterprise/:id', getAllEnterpriseMembers)
router.get('/enterprise/:id/search', searchEnterpriseMemberName)
// router.put('/:id', updateCommunityMembers);

module.exports = router
