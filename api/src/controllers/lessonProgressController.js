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
  const progress = await db.LessonProgress.create(req.body)
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
