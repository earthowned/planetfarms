const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const fs = require('fs')
const multer = require('multer')
const shortid = require('shortid')
const path = require('path')
const { protect } = require('../middleware/authMiddleware')
=======
const {multipleUpload}=require('../helpers/filehelpers')
>>>>>>> ceda9c89 (file attachments)

const { getResources, addResource, getResourcesById, deleteResources, updateResources, searchResourcesTitle } = require('../controllers/resourceController.js')


router.route('/').get(getResources)
<<<<<<< HEAD
router.route('/add').post(protect, upload.single('avatar'), addResource)
=======
router.route('/add').post(multipleUpload, addResource)
>>>>>>> ceda9c89 (file attachments)
router.route('/search').get(searchResourcesTitle)
router
  .route('/:id')
  .get(getResourcesById)
  .delete(protect, deleteResources)
  .put(protect, updateResources)

module.exports = router
