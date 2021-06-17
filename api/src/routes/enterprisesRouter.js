const express = require('express')
const router = express.Router()
const { upload } = require('../helpers/filehelpers')

const { getEnterprises, addEnterprises, getEnterprisesById, deleteEnterprises, updateEnterprises, searchEnterprisesTitle, getCommunityEnterprises } = require('../controllers/enterprisesController')

router.route('/').get(getEnterprises)
router.route('/community/:id').get(getCommunityEnterprises)
router.route('/add').post(upload.single('enterprise'), addEnterprises)
router.route('/search').get(searchEnterprisesTitle)
router
  .route('/:id')
  .get(getEnterprisesById)
  .delete(deleteEnterprises)
  .put(updateEnterprises)

module.exports = router
