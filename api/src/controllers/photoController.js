const db = require('../models')
const NotFoundError = require('../errors/notFoundError')
const { changeFormat } = require('../helpers/filehelpers')
const CircularJSON = require('circular-json')

const getPhotos = async (_req, res) => {
  const photos = await db.Photo.findAll()
  if (!photos) {
    throw new NotFoundError()
  }
  const data = {
    photos: photos.map((photo) => ({
      ...photo.dataValues,
      lessonImg: changeFormat(photo.lessonImg)
    }))
  }
  res.status(200).json({
    status: true,
    message: 'fetched all lesson photos successfully',
    data: data
  })
}

const getPhotoById = async (req, res) => {
  const { id } = req.params
  const photo = await db.Photo.findOne({ where: { id } })
  if (!photo) {
    throw new NotFoundError()
  }
  const lessonImg = changeFormat(photo?.dataValues?.lessonImg)
  const photoData = photo.dataValues
  const data = Object.assign({
    ...photo,
    dataValues: { ...photoData, lessonImg }
  })
  const str = JSON.parse(CircularJSON.stringify(data))
  res.status(200).json({
    status: true,
    message: 'fetched lesson photo successfully',
    data: str.dataValues
  })
}

const addphoto = async (req, res) => {
  let lessonImg = ''
  if (req.file) {
    lessonImg = req.file.filename
  }
  const photo = await db.Photo.create({ ...req.body, lessonImg })
  res.status(201).json({
    status: true,
    message: 'added new lesson photo successfully',
    data: photo
  })
}

const updatePhoto = async (req, res) => {
  let lessonImg = ''

  const singlePhoto = await db.Photo.findOne({where: {id: req.params.id}});
  console.log(...req.body);
  if (req.file) {
    lessonImg = req.file.filename
  } else {
    lessonImg = singlePhoto.dataValues.lessonImg
  }
  const photo = await db.Photo.update({ ...req.body, lessonImg }, {where: {id: req.params.id}})
  res.status(201).json({
    status: true,
    message: 'photo updated successfully',
    data: photo
  })
}

const deletePhoto = async (req, res) => {
  const { id } = req.params
  const photo = await db.Photo.destroy({ where: { id } })
  if (!photo) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'Lesson photo deleted successfully',
    data: photo
  })
}

module.exports = {
  getPhotos,
  getPhotoById,
  addphoto,
  deletePhoto,
  updatePhoto
}
