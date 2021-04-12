const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const shortid = require('shortid');
const addCourse = require('../controllers/courseController.js');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
     cb(null, path.join(path.dirname(__dirname), "/uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

 router.route('/add').post(upload.array("productPicture"), addCourse);

 module.exports = router;
 