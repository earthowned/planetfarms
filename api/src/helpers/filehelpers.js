const multer = require('multer')
const shortid = require('shortid')
const path = require('path')
const fs = require('fs')
const sharp = require('sharp');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(path.dirname(__dirname), '..', 'files', `${file.fieldname}`)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
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

  if ((path.extname(file.originalname) === '.pdf' || extname) && mimetype) {
    return cb(null, true)
  } else {
    throw new Error('Format not valid')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  }
})

const multipleUpload = upload.fields([{ name: 'avatar' }, { name: 'attachment' }])

const uploadArray = multer({ storage }).array('files')

const resizeImage = (req, res, next) => {
  try {
    const filename = path.basename(req.file.path).split('.').slice(0, -1).join('.')
    const dir = path.join(path.dirname(__dirname), '..', 'files', `${req.file.fieldname}`, filename)
    let newImage = sharp(req.file.path)
    newImage = newImage.resize(parseInt(req.body.width))
    if(req.body.save) {
      const savePath = dir + '-' + req.body.width + 'x' + req.body.height + '.' + req.body.format
      newImage = newImage.toFile(savePath, (err, resizeImage) => {
          if (err) {
              console.log(err);
          } else {
              console.log(resizeImage);
          }
      })
      return next(null, true)
    } else {
      newImage = newImage.toBuffer()
      .then((data) => {
        //To display the image
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': data.length
        });
        return (res.end(data));
      })
      .catch(err => { console.error(err); });
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = { multipleUpload, uploadArray, upload, resizeImage }
