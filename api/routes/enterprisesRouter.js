const express = require('express')
const router = express.Router()
const { multipleUpload } = require('../helpers/filehelpers')

const { getEnterprises, addEnterprises, getEnterprisesById, deleteEnterprises, updateEnterprises, searchEnterprisesTitle } = require('../controllers/enterprisesController')

router.route('/').get(getEnterprises)
router.route('/add').post(multipleUpload, addEnterprises)
router.route('/search').get(searchEnterprisesTitle)
router
  .route('/:id')
  .get(getEnterprisesById)
  .delete(deleteEnterprises)
  .put(updateEnterprises)

module.exports = router
