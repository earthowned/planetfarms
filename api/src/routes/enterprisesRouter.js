const express = require('express')
const router = express.Router()
const checkCommunity = require('../middleware/checkCommunity')
const { upload, resizeImage } = require('../helpers/filehelpers')
const protect = require('../middleware/authMiddleware')
const {
  getEnterprises, addEnterprises, getEnterprisesById, deleteEnterprises,
  updateEnterprises, searchEnterprisesTitle, getUserEnterprises
} = require('../controllers/enterprisesController')

router.route('/community/:id').get(protect, checkCommunity, getEnterprises)
router.route('/community/:id/user').get(protect, checkCommunity, getUserEnterprises)
router.route('/add/community/:id').post(protect, checkCommunity, upload.single('enterprise'), resizeImage, addEnterprises)
router.route('/community/:id/search').get(checkCommunity, searchEnterprisesTitle)
router
  .route('/:enterpriseId/community/:id')
  .get(checkCommunity, getEnterprisesById)
  .delete(protect, checkCommunity, deleteEnterprises)
  .put(protect, checkCommunity, updateEnterprises)

module.exports = router
