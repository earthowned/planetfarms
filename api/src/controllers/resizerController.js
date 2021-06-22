const path = require('path');
const sharp = require('sharp');
const resizeImage = (req, res, next) => {
  try {
    const filename = path.basename(req.file.path).split('.').slice(0, -1).join('.')
    const dir = path.join(path.dirname(__dirname), '..', 'files', `${req.file.fieldname}`, filename)
    let newImage = sharp(req.file.path)
    if(req.body.save) {
      newImage = newImage.resize(parseInt(req.body.width), parseInt(req.body.height))
      const savePath = dir + '-' + req.body.width + 'x' + req.body.height + '.' + req.body.format
      newImage = newImage.toFile(savePath, (err, resizeImage) => {
        if (err) {
            console.log(err);
        } else {
            console.log(resizeImage);
        }
      })
      res.status(201).json({
        message: 'File uploded successfully',
        image: savePath
      })
    } else {
      return renderImage({ ...req, image: req.file.path }, res, next)
    }
  } catch (error) {
    console.error(error);
  }
}

const renderImage = (req, res, next) => {
  try {
    let newImage = sharp(req.image)
    newImage = newImage.resize(parseInt(req.body.width), parseInt(req.body.height))
    newImage = newImage.toBuffer()
    .then((data) => {
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': data.length
      });
      return (res.end(data));
    })
    .catch(err => { console.error(err); });
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = { resizeImage, renderImage }
