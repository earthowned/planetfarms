const express = require('express')
const router = express.Router()
const fs = require('fs')
const multer = require('multer')
const shortid = require('shortid')
const path = require('path')

const { getResources, addResource, getResourcesById, deleteResources, updateResources, searchResourcesTitle } = require('../controllers/resourceController.js')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(path.dirname(__dirname), '/files', '/resources')
    fs.mkdirSync(dir)
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname)
  }
})

function checkFileType (file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    throw new Error('Course not found')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
})
router.route('/').get(getResources)
router.route('/add').post(upload.single('avatar'), addResource)
router.route('/search').get(searchResourcesTitle)
router
  .route('/:id')
  .get(getResourcesById)
  .delete(deleteResources)
  .put(updateResources)

module.exports = router
