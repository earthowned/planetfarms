const Lessons = require('../models/lessonModal')
const Video = require('../models/videoModel')
const LessonPhoto = require('../models/lessonPhotoModel')
const LessonText = require('../models/lessonTextModel')
const Material = require('../models/materialModel')

const getLessons = async (_req, res) => {
  const lessons = await Lessons.findAll({
    include: [Video, LessonPhoto, LessonText, Material]
  })
  res.status(200).json({
    status: true,
    message: 'fetched all lessons successfully',
    data: lessons
  })
}
const getLessonById = async (req, res) => {
  const { id } = req.params
  const lesson = await Lessons.findOne({
    where: { id },
    include: [Video, LessonPhoto, LessonText, Material]
  })
  res.status(200).json({
    status: true,
    message: 'fetched lesson successfully',
    data: lesson
  })
}

const addLesson = async (req, res) => {
  let coverImg = ''
  if (req.file) {
    coverImg = req.file.filename
  }

  const lesson = await Lessons.create({ ...req.body, coverImg })
  res.status(201).json({
    status: true,
    message: 'added new lesson successfully',
    data: lesson
  })
}

const deleteLesson = async (req, res) => {
  const { id } = req.params
  const lesson = await Lessons.destroy({ where: { id } })
  res.status(202).json({
    status: true,
    message: 'deleted lesson successfully',
    data: lesson
  })
}

const updateLesson = async (req, res) => {
  const { id } = req.params
  const lesson = await Lessons.update(req.body, {
    where: { id }
  })
  res.status(202).json({
    status: true,
    message: 'lesson updated successfully',
    data: lesson
  })
}

module.exports = {
  getLessons,
  getLessonById,
  addLesson,
  deleteLesson,
  updateLesson
}
