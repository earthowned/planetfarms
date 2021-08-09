const multer = require('multer')
const shortid = require('shortid')
const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = path.join(
      path.dirname(__dirname),
      '..',
      'files',
      `${file.fieldname}`
    )
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + path.extname(file.originalname).toLowerCase())
  }
})

function checkFileType (file, cb) {
  const filetypes = /jpg|jpeg|png|mp4|pdf|doc|docx|ppt|pptx|txt|xlsx/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname || mimetype) {
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

const multipleUpload = upload.fields([
  { name: 'avatar' },
  { name: 'attachment' }
])

const uploadArray = multer({ storage }).array('files')

const resizeImage = (req, res, next) => {
  const { format, height, width } = { format: 'webp', ...req.body }
  try {
    // user might not send image sometimes
    if (!req.file) {
      next()
    }
      else {
        const filename = path
          .basename(req.file.path)
          .split('.')
          .slice(0, -1)
          .join('.')
        let dir = path.join(
          path.dirname(__dirname),
          '..',
          'files',
          `${req.file.fieldname}`,
          filename
        )
        let newImage = sharp(req.file.path)
        if (width) {
          newImage = newImage.resize(parseInt(width))
          dir = dir + '-' + width + 'x' + height
        }
        if (req.body.render) {
          newImage.toBuffer().then((data) => {
            // To display the image
            res.writeHead(200, {
              'Content-Type': 'image/webp',
              'Content-Length': data.length
            })
            return res.end(data)
          })
        } else {
          const savePath = dir + '.' + format
          newImage = newImage.toFile(savePath)
          return next(null, true)
        }
      }
  } catch (error) {
    console.error(error)
  }
}

const changeFormat = (filename) =>
  filename &&
  path.basename(filename).split('.').slice(0, -1).join('.') + '.webp'

module.exports = {
  multipleUpload,
  uploadArray,
  upload,
  resizeImage,
  changeFormat
}
