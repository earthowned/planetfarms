const Photo = require('../models/photoModel')
const NotFoundError = require('../errors/notFoundError')

const getPhotos = async (_req, res) => {
  const photos = await Photo.findAll()
  if (!photos) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched all lesson photos successfully',
    data: photos
  })
}

const getPhotoById = async (req, res) => {
  const { id } = req.params
  const photo = await Photo.findOne({ where: { id } })
  if (!photo) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched lesson photo successfully',
    data: photo
  })
}

const addphoto = async (req, res) => {
  let lessonImg = ''
  if (req.file) {
    lessonImg = req.file.filename
  }
  const photo = await Photo.create({ ...req.body, lessonImg })
  res.status(201).json({
    status: true,
    message: 'added new lesson photo successfully',
    data: photo
  })
}

const deletePhoto = async (req, res) => {
  const { id } = req.params
  const photo = await Photo.destroy({ where: { id } })
  if (!photo) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'Lesson photo deleted successfully',
    data: photo
  })
}

const updatePhoto = async (req, res) => {
  const { id } = req.params
  const photo = await Photo.update(req.body, {
    where: { id }
  })
  if (!photo) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'Lesson photo updated successfully',
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
