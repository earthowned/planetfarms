const db = require('../models')

const getLessons = async (_req, res) => {
  const lessons = await db.Lesson.findAll({
    include: [db.Video, db.Photo, db.Text, db.Material]
  })
  res.status(200).json({
    status: true,
    message: 'fetched all lessons successfully',
    data: lessons
  })
}
const getLessonById = async (req, res) => {
  const { id } = req.params
  const lesson = await db.Lesson.findOne({
    where: { id },
    include: [db.Video, db.Photo, db.Text, db.Material]
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

  const lesson = await db.Lesson.create({ ...req.body, coverImg })
  res.status(201).json({
    status: true,
    message: 'added new lesson successfully',
    data: lesson
  })
}

const deleteLesson = async (req, res) => {
  const { id } = req.params
  const lesson = await db.Lesson.destroy({
    where: { id },
    include: [db.Video, db.Photo, db.Text, db.Material]
  })
  res.status(202).json({
    status: true,
    message: 'deleted lesson successfully',
    data: lesson
  })
}

const updateLesson = async (req, res) => {
  const { id } = req.params
  let coverImg
  if (req.file) {
    coverImg = req.file.filename
  }

  const lesson = await db.Lesson.update(
    { ...req.body, coverImg },
    {
      where: { id }
    }
  )
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
