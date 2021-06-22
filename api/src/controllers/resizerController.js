const sharp = require('sharp')
const { resizeImage } = require('../helpers/filehelpers')

const resize = (req, res, next) => {
  try {
    resizeImage(req, res, () => {
      return res.status(201).json({
        message: 'File uploded successfully',
        image: req.file.filename
      })
    })
  } catch (error) {
    console.error(error)
  }
}

const render = (req, res, next) => {
  try {
    let newImage = sharp(req.body.image)
    newImage = newImage.resize(parseInt(req.body.width), parseInt(req.body.height))
    newImage.toBuffer()
      .then((data) => {
        res.writeHead(200, {
          'Content-Type': 'image/png',
          'Content-Length': data.length
        })
        return (res.end(data))
      })
      .catch(err => { console.error(err) })
  } catch (error) {
    console.error(error)
  }
}

module.exports = { resize, render }
