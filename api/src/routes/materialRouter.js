const express = require('express')
const router = express.Router()
require('express-async-errors')
const { upload } = require('../helpers/filehelpers')
const {
  getMaterials,
  getMaterialById,
  addMaterial,
  deleteMaterial,
  updateMaterial
} = require('../controllers/materialController')

router.route('/').get(getMaterials)
router.route('/add').post(upload.single('material'), addMaterial)
router
  .route('/:id')
  .get(getMaterialById)
  .delete(deleteMaterial)
  .put(updateMaterial)

module.exports = router
