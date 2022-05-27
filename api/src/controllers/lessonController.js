const { Joi } = require('express-validation')
const db = require('../models')
const { deleteImages } = require('../helpers/filehelpers')
const BadRequestError = require('../errors/badRequestError')
const NotFoundError = require('../errors/notFoundError')
const ForbiddenRequestError = require('../errors/forbiddenRequestError')

const getLessons = async (req, res) => {
  let { page, pageSize } = req.query
  page = Number(page) || 1
  pageSize = Number(pageSize) || undefined

  const { courseId } = req.params
  const lessons = await db.Lesson.findAndCountAll({
    offset: pageSize === undefined ? undefined : (page - 1) * pageSize,
    limit: pageSize === undefined ? undefined : pageSize,
    order: [['createdAt', 'ASC']],
    where: { courseId }
  })

  const totalPages = Math.ceil(lessons.count / pageSize ?? 1) || 0
  res.status(200).json({
    message: 'Fetched lessons successfully',
    data: lessons.rows,
    totalItems: lessons.count,
    totalPages,
    page,
    pageSize
  })
}

const getLessonById = async (req, res) => {
  const { id } = req.params
  const courseId = getCourseIdFromUrl(req.baseUrl)
  const lesson = await db.Lesson.findOne({
    where: { id, courseId },
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

  if (!lesson) {
    throw new NotFoundError()
  }

  res.status(200).json({
    message: 'Lesson fetched successfully',
    data: lesson
  })
}

const lessonSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    thumbnail: Joi.string().uri(),
    description: Joi.array().items(
      Joi.alternatives().try(
        Joi.object({
          heading: Joi.string(),
          text: Joi.string().required(),
        }),
        Joi.object({
          image: Joi.string().uri().required(),
          description: Joi.string()
        })
      )
    )
  })
}

const createRichtextData = async (data, transaction) => {
  let richtextId = null

  if (data) {
    const richtext = await db.RichText.create({}, { transaction })
    richtextId = richtext.id

    await Promise.all(data.map((item, index) => {
      if (item.image) {
        return db.Photo.create({
          richtextId,
          image: item.image,
          description: item.description,
          isImgDesc: true,
          order: index + 1
        }, {
          transaction
        })
      }

      return db.Text.create({
        richtextId,
        heading: item.heading,
        description: item.text,
        order: index + 1
      }, {
        transaction
      })
    }))
  }

  return richtextId
}

const formatLesson = lesson => {
  const unsortedDescription = lesson.rich_text ? [
    ...lesson.rich_text.photos, ...lesson.rich_text.texts
  ] : []
  const description = unsortedDescription
    .sort((a, b) => a.order - b.order)
    .map(item => {
      if (item.image) {
        return {
          image: item.image,
          description: item.description
        }
      }

      return {
        heading: item.heading,
        text: item.description
      }
    })

  const formattedData = {
    id: lesson.id,
    title: lesson.title,
    thumbnail: lesson.thumbnail,
    courseId: lesson.courseId,
    description
  }

  return formattedData
}

const addLesson = async (req, res) => {
  const { user, params, body } = req
  const { title, description, thumbnail = null } = body
  const { courseId } = params

  const course = await db.Courses.findByPk(courseId)

  if (!course) {
    throw new NotFoundError('Course not found')
  }

  if (course.creatorId !== user.id) {
    throw new ForbiddenRequestError()
  }

  const lessonData = {
    courseId,
    thumbnail,
    title
  }
  let createdLessonId;

  await db.sequelize.transaction(async (transaction) => {
    const richtextId = await createRichtextData(description, transaction)

    const createdLesson = await db.Lesson.create({
      ...lessonData,
      richtextId
    }, {
      transaction
    })

    createdLessonId = createdLesson.id
  })

  const lesson = await db.Lesson.findOne({
    where: { id: createdLessonId },
    include: [
      {
        model: db.RichText,
        include: [db.Text, db.Photo]
      }
    ]
  })

  res.status(201).json({
    message: 'New lesson added successfully',
    data: formatLesson(lesson)
  })
}

const deleteLesson = async (req, res) => {
  const { id } = req.params
  const courseId = getCourseIdFromUrl(req.baseUrl)

  const lesson = await db.Lesson.findOne({
    where: { id, courseId },
    include: [db.Courses]
  })

  if (!lesson) {
    throw new NotFoundError()
  }

  if (lesson.course.creatorId !== req.user.id) {
    throw new ForbiddenRequestError()
  }

  await db.sequelize.transaction(async (transaction) => {
    await lesson.destroy({
      transaction
    })
    await db.RichText.destroy({
      where: { id: lesson.richtextId },
      transaction
    })
    const photos = await db.Photo.findAll({
      where: { richtextId: lesson.richtextId }
    })
    const photosToDelete = [
      ...photos.map(photo => photo.image),
      ...(lesson.thumbnail ? [lesson.thumbnail] : [])
    ]
    await deleteImages(photosToDelete)
  })

  res.status(200).json({
    message: 'Lesson deleted successfully'
  })
}

const updateLesson = async (req, res) => {
  const { user, params, body } = req
  const { courseId, id } = params

  let lesson = await db.Lesson.findOne({
    where: { id, courseId },
    include: [db.Courses]
  })

  if (!lesson) {
    throw new NotFoundError()
  }

  if (lesson.course.creatorId !== user.id) {
    throw new ForbiddenRequestError()
  }

  const { title, description, thumbnail = null } = body
  const lessonData = {
    courseId,
    title,
    thumbnail
  }
  const oldRichtextId = lesson.richtextId

  await db.sequelize.transaction(async (transaction) => {
    const richtextId = await createRichtextData(description, transaction)
    const photos = await db.Photo.findAll({
      where: { richtextId: oldRichtextId }
    })
    await db.RichText.destroy({
      where: {
        id: oldRichtextId
      },
    }, {
      transaction
    })

    const images = (body.description || []).reduce((acc, curr) => {
      if (curr.image) {
        acc.push(curr.image)
      }

      return acc
    }, [])

    const photosToDelete = [
      ...photos
        .map(photo => photo.image)
        .filter(photo => !images.includes(photo)),
      ...(
        lesson.thumbnail && lesson.thumbnail !== thumbnail ?
        [lesson.thumbnail] : []
      )
    ]
    await deleteImages(photosToDelete)

    await lesson.update({
      ...lessonData,
      richtextId
    }, {
      transaction
    })
  })

  lesson = await db.Lesson.findOne({
    where: { id },
    include: [
      {
        model: db.RichText,
        include: [db.Text, db.Photo]
      }
    ]
  })

  res.status(200).json({
    message: 'Lesson updated successfully',
    data: formatLesson(lesson)
  })
}

module.exports = {
  getLessons,
  getLessonById,
  addLesson,
  deleteLesson,
  updateLesson,
  lessonSchema
}
