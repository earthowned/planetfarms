const db = require('../models')
const NotFoundError = require('../errors/notFoundError')

const getPhotos = async (_req, res) => {
  const photos = await db.Photo.findAll()
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
  const photo = await db.Photo.findOne({ where: { id } })
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
  const photo = await db.Photo.create({ ...req.body, lessonImg })
  res.status(201).json({
    status: true,
    message: 'added new lesson photo successfully',
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

const updatePhoto = async (req, res) => {
  const { id } = req.params
  let lessonImg
  if (req.file) {
    lessonImg = req.file.filename
  }
  const photo = await db.Photo.update(
    { ...req.body, lessonImg },
    {
      where: { id }
    }
  )
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
