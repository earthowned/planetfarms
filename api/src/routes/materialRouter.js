const express = require('express')
const router = express.Router()
require('express-async-errors')
const { upload } = require('../helpers/filehelpers')
const {
  getMaterials,
  getMaterialById,
  addMaterial,
  deleteMaterial,
  downloadMaterial
} = require('../controllers/materialController')
const protect = require('../middleware/authMiddleware')

router.use(protect)

router
  .route('/')
  .get(getMaterials)
  .post(upload.fields([{ name: 'materials' }]), addMaterial)
router
  .route('/:id')
  .get(getMaterialById)
  .delete(deleteMaterial)
router
  .route('/:id/download')
  .get(downloadMaterial)

module.exports = router
