const LessonPhoto = require('../models/lessonPhotoModel')
const NotFoundError = require('../errors/notFoundError')

const getLessonPhotos = async (_req, res) => {
  const lessonPhotos = await LessonPhoto.findAll()
  if (!lessonPhotos) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched all lesson photos successfully',
    data: lessonPhotos
  })
}

const getLessonPhotoById = async (req, res) => {
  const { id } = req.params
  const lessonPhoto = await LessonPhoto.findOne({ where: { id } })
  if (!lessonPhoto) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched lesson photo successfully',
    data: lessonPhoto
  })
}

const addlessonPhoto = async (req, res) => {
  let lessonImg = ''
  if (req.file) {
    lessonImg = req.file.filename
  }
  const lessonPhoto = await LessonPhoto.create({ ...req.body, lessonImg })
  res.status(201).json({
    status: true,
    message: 'added new lesson photo successfully',
    data: lessonPhoto
  })
}

const deleteLessonPhoto = async (req, res) => {
  const { id } = req.params
  const lessonPhoto = await LessonPhoto.destroy({ where: { id } })
  if (!lessonPhoto) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'Lesson photo deleted successfully',
    data: lessonPhoto
  })
}

const updateLessonPhoto = async (req, res) => {
  const { id } = req.params
  const lessonPhoto = await LessonPhoto.update(req.body, {
    where: { id }
  })
  if (!lessonPhoto) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'Lesson photo updated successfully',
    data: lessonPhoto
  })
}

module.exports = {
  getLessonPhotos,
  getLessonPhotoById,
  addlessonPhoto,
  deleteLessonPhoto,
  updateLessonPhoto
}
