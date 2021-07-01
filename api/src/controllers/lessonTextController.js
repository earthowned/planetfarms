const LessonText = require('../models/lessonTextModel')
const NotFoundError = require('../errors/notFoundError')

const getLessonText = async (_req, res) => {
  const lessonTexts = await LessonText.findAll()
  if (!lessonTexts) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched all lesson text successfully',
    data: lessonTexts,
  })
}

const getLessonTextById = async (req, res) => {
  const { id } = req.params
  const lessonText = await LessonText.findOne({ where: { id } })
  if (!lessonText) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched lesson text successfully',
    data: lessonText,
  })
}

const addLessonText = async (req, res) => {
  const lessonText = await LessonText.create(req.body)
  res.status(201).json({
    status: true,
    message: 'added new lesson text successfully',
    data: lessonText,
  })
}

const deleteLessonText = async (req, res) => {
  const { id } = req.params
  const lessonText = await LessonText.destroy({ where: { id } })
  if (!lessonText) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'Lesson text deleted successfully',
    data: lessonText,
  })
}

const updateLessonText = async (req, res) => {
  const { id } = req.params
  const lessonText = await LessonText.update(req.body, {
    where: { id },
  })
  if (!lessonText) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'Lesson text updated successfully',
    data: lessonText,
  })
}

module.exports = {
  getLessonText,
  getLessonTextById,
  addLessonText,
  deleteLessonText,
  updateLessonText,
}
