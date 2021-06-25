const { getEnterpriseUsers, followEnterprise, getAllEnterpriseUsers, searchEnterpriseUserName } = require('../controllers/enterpriseUserController')

const router = require('express').Router()

router.get('/', getEnterpriseUsers);
router.post('/follow', followEnterprise);
router.get('/enterprise/:id', getAllEnterpriseUsers)
router.get('/enterprise/:id/search', searchEnterpriseUserName)
// router.put('/:id', updateCommunityMembers);

module.exports = router
