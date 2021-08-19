const db = require('../models')
const { changeFormat } = require('../helpers/filehelpers')
const CircularJSON = require('circular-json')

const getLessons = async (req, res) => {
  const pageSize = 1
  const page = Number(req.query.pageNumber) || 1
console.log(req.params.courseId)
  const lessons = await db.Lesson.findAndCountAll({
    // offset: (page - 1) * pageSize,
    // limit: pageSize,
    order: [['order', 'ASC']],
    include: [db.Video, db.Photo, db.Text, db.Material],
    where: {courseId: req.params.courseId}
  })

  const totalPages = Math.ceil(lessons.count / pageSize)
  res.status(200).json({
    status: true,
    message: 'fetched all lessons successfully',
    lessons: lessons.rows.map(rec => ({ ...rec.dataValues })),
    totalItems: lessons.count,
    totalPages,
    page,
    pageSize
  })
}
const getLessonById = async (req, res) => {
  const { id } = req.params
  const lesson = await db.Lesson.findOne({
    where: { id },
    include: [db.Video, db.Photo, db.Text, db.Material, db.Test, db.LessonProgress, db.Courses],
  })

  lesson.photos.forEach((photo) => {
    photo.lessonImg = changeFormat(photo.lessonImg)
  })
  lesson.videos.forEach((video) => {
    video.videoCover = changeFormat(video.videoCover)
  })

  const coverImg = changeFormat(lesson?.dataValues?.coverImg)
  const lessonData = lesson.dataValues
  const data = Object.assign({
    ...lesson,
    dataValues: { ...lessonData, coverImg }
  })
  const str = JSON.parse(CircularJSON.stringify(data))
  res.status(200).json({
    status: true,
    message: 'fetched lesson successfully',
    data: str.dataValues
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
  const lesson = await db.Lesson.destroy({ where: { id } })
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
