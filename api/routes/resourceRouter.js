const express = require('express')
const router = express.Router()
const fs = require('fs')
const multer = require('multer')
const shortid = require('shortid')
const path = require('path')
const { protect } = require('../middleware/authMiddleware')
const { uploadArray, upload } = require('../helpers/filehelpers')

const { getResources, addResource, getResourcesById, deleteResources, updateResources, searchResourcesTitle } = require('../controllers/resourceController.js')

router.route('/').get(getResources)
// router.route('/add').post(protect, upload.single('avatar'), addResource)
router.route('/add').post(upload.single('file'), addResource)
router.route('/search').get(searchResourcesTitle)
router
  .route('/:id')
  .get(getResourcesById)
  .delete(protect, deleteResources)
  .put(protect, updateResources)

module.exports = router
