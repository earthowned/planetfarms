const Lessons = require('../models/lessonModal')

const getLessons = async (_req, res) => {
  const lessons = await Lessons.findAll()
  res.status(200).json({
    status: true,
    message: 'fetched all lessons successfully',
    results: lessons
  })
}
const getLessonById = async (req, res) => {
  const lessonId = req.params.lessonId
  const lesson = await Lessons.findOne({ where: { lessonId: lessonId } })
  res.status(200).json({
    status: true,
    message: 'fetched lesson successfully',
    results: lesson
  })
}

const addLesson = async (req, res) => {
  const lesson = await Lessons.create(req.body)
  console.log(lesson)
  res.status(201).json({
    status: true,
    message: 'added new lesson successfully',
    results: lesson
  })
}

const deleteLesson = async (req, res) => {
  const lessonId = req.params.lessonId
  const lesson = await Lessons.destroy({ where: { lessonId: lessonId } })
  res.status(202).json({
    status: true,
    message: 'deleted lesson successfully',
    results: lesson
  })
}

const updateLesson = async (req, res) => {
  const lessonId = req.params.lessonId
  const lesson = await Lessons.update(req.body, {
    where: { lessonId: lessonId }
  })
  res.status(202).json({
    status: true,
    message: 'lesson updated successfully',
    results: lesson
  })
}

module.exports = {
  getLessons,
  getLessonById,
  addLesson,
  deleteLesson,
  updateLesson
}
