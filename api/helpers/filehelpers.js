const multer = require("multer")
const shortid = require("shortid")
const path = require("path")
const fs = require('fs')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const dir = path.join(path.dirname(__dirname), '/files', '/resources')
    //   fs.mkdirSync(dir)
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
  
    if (path.extname(file.originalname) == ".pdf" || extname && mimetype) {
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

  const multipleUpload=upload.fields([{name:'avatar'} ,{name:'attachment'}])


module.exports={multipleUpload}
