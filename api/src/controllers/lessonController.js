const { Joi } = require('express-validation')
const db = require('../models')
const NotFoundError = require('../errors/notFoundError')
const ForbiddenRequestError = require('../errors/forbiddenRequestError')

const getLessons = async (req, res) => {
  let { page, pageSize } = req.query
  page = Number(page) || 1
  pageSize = Number(pageSize) || undefined

  const lessons = await db.Lesson.findAndCountAll({
    offset: pageSize === undefined ? undefined : (page - 1) * pageSize,
    limit: pageSize === undefined ? undefined : pageSize,
    order: [['createdAt', 'ASC']],
    where: { courseId: req.params.courseId }
  })

  const totalPages = Math.ceil(lessons.count / pageSize ?? 1)
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
  const { courseId, id } = req.params
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
  params: Joi.object({
    courseId: Joi.string().required()
  }),
  body: Joi.object({
    title: Joi.string().required(),
    lesson_order: Joi.number().required(),
    text_heading: Joi.alternatives().try(
      Joi.string(),
      Joi.array().items(Joi.string())
    ),
    text_description: Joi.alternatives().try(
      Joi.string(),
      Joi.array().items(Joi.string())
    ),
    photo_description: Joi.alternatives().try(
      Joi.string(),
      Joi.array().items(Joi.string())
    ),
    description_order: Joi.alternatives().try(
      Joi.string().valid('text', 'image'),
      Joi.array().items(Joi.string().valid('text', 'image'))
    )
  }),
}

const addLesson = async (req, res) => {
  const { params, user, files, body } = req
  const { courseId } = params
  const { title, description_order: descriptionOrder, lesson_order: lessonOrder } = body
  const thumbnail = files.thumbnail?.[0]?.filename || null

  const course = await db.Courses.findByPk(courseId)

  if (!course) {
    throw new NotFoundError()
  }

  if (course.creatorId !== user.id) {
    throw new ForbiddenRequestError()
  }

  const lessonData = {
    courseId,
    thumbnail: thumbnail ? `thumbnail/${thumbnail}` : null,
    title,
    order: lessonOrder
  }
  let createdLessonId;

  await db.sequelize.transaction(async (transaction) => {
    const richtext = await db.RichText.create({}, { transaction })
    const richtextId = richtext.id

    if (descriptionOrder) {

      const richtextCount = Array.isArray(body.text_description) ? body.text_description.length : 1
      const photoCount = files.courses?.length || 0
      const orderCount = Array.isArray(descriptionOrder) ? descriptionOrder.length : 1

      // add validation if texts and photo tallies the order count
      if (photoCount + richtextCount !== orderCount) {
        throw new BadRequestError('Contents don\'t match the ordering count')
      }

      await Promise.all([...(orderCount === 1 ? [descriptionOrder] : descriptionOrder)].map(async (order, index) => {
        if (order === 'text') {
          return db.Text.create({
            richtextId,
            textHeading: Array.isArray(body.text_heading) ? body.text_heading.shift() : body.text_heading,
            textDescription: Array.isArray(body.text_description) ? body.text_description.shift() : body.text_description,
            order: index + 1
          }, {
            transaction
          })
        }

        return db.Photo.create({
          richtextId,
          lessonImg: `lessons/${files.courses.shift().filename}`,
          photoDescription: Array.isArray(body.photo_description) ? body.photo_description.shift() : body.photo_description,
          isImgDesc: false,
          order: index + 1
        }, {
          transaction
        })
      }))
    }

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
    data: lesson
  })
}

const deleteLesson = async (req, res) => {
  const { courseId, id } = req.params

  const lesson = await db.Lesson.findOne({
    where: { id },
    include: [db.Courses]
  })

  if (!lesson || lesson.courseId !== courseId) {
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
  })

  res.status(200).json({
    message: 'Lesson deleted successfully'
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
  res.status(200).json({
    message: 'Lesson updated successfully',
    data: lesson
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
