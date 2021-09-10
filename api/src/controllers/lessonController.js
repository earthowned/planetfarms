const db = require('../models')

const getLessons = async (req, res) => {
  const pageSize = 1
  const page = Number(req.query.pageNumber) || 1
  const lessons = await db.Lesson.findAndCountAll({
    // offset: (page - 1) * pageSize,
    // limit: pageSize,
    order: [['createdAt', 'ASC']],
    where: { courseId: req.params.courseId }
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
    include: [
      {
        model: db.RichText,
        include: [db.Text, db.Video, db.Photo]
      },
      db.Material,
      db.Test,
      db.LessonProgress,
      db.Courses
    ]
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
  const { courseId, title, lessonDesc, richtextId } = req.body
  const lesson = await db.Lesson.create({ courseId, title, lessonDesc, richtextId, coverImg })
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
