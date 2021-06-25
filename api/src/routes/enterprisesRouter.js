const express = require('express')
const router = express.Router()
const checkCommunity = require('../middleware/checkCommunity')
const { upload } = require('../helpers/filehelpers')

const {
  getEnterprises, addEnterprises, getEnterprisesById, deleteEnterprises,
  updateEnterprises, searchEnterprisesTitle, getUserEnterprises
} = require('../controllers/enterprisesController')

router.route('/community/:id').get(checkCommunity, getEnterprises)
router.route('/community/:id/user/userId').get(checkCommunity, getUserEnterprises)
router.route('/add/community/:id').post(checkCommunity, upload.single('enterprise'), addEnterprises)
router.route('/community/:id/search').get(checkCommunity, searchEnterprisesTitle)
router
  .route('/:enterpriseId/community/:id')
  .get(checkCommunity, getEnterprisesById)
  .delete(checkCommunity, deleteEnterprises)
  .put(checkCommunity, updateEnterprises)

module.exports = router
