const db = require('../models')
const NotFoundError = require('../errors/notFoundError')

const getProgress = async (req, res) => {
  const progress = await db.LessonProgress.findAll(req.body)
  if (!progress) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched all lesson progress successfully',
    data: progress
  })
}

const getProgressById = async (req, res) => {
  const { id } = req.params
  const progress = await db.LessonProgress.findOne({ where: { id } })
  if (!progress) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched progress progress successfully',
    data: progress
  })
}

const addProgress = async (req, res) => {
  const {lessonId, startTime} = req.body
  const prevProgress = await db.LessonProgress.findOne({where: {lessonId, userId: req.user.id}})

  if(prevProgress) {
    return res.status(201).json({
    status: true,
    message: 'Lesson already in progress',
  })
  }

  const progress = await db.LessonProgress.create({lessonId, startTime, userId: req.user.id})
  res.status(201).json({
    status: true,
    message: 'added new progress successfully',
    data: progress
  })
}

const deleteProgress = async (req, res) => {
  const { id } = req.params
  const progress = await db.LessonProgress.destroy({ where: { id } })
  if (!progress) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: ' progress deleted successfully'
  })
}

const updateProgress = async (req, res) => {
  const { id } = req.params
  const progress = await db.LessonProgress.update(req.body, { where: { id } })
  if (!progress) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: ' progress updated successfully',
    data: progress
  })
}

module.exports = {
  getProgress,
  getProgressById,
  addProgress,
  deleteProgress,
  updateProgress
}
