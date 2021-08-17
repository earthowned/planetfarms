const db = require('../models')
const NotFoundError = require('../errors/notFoundError')
const { sequelize } = require('../models')

const getEnroll = async (req, res) => {
  const enrolls = await db.Enroll.findAll()
  if (!enrolls) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: 200,
    message: 'fetched all enrollments successfully',
    data: enrolls
  })
}

const getEnrollById = async (req, res) => {
  const { id } = req.params
  const enroll = await db.Enroll.findOne({ where: { id } })
  if (!enroll) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched  enrollment successfully',
    data: enroll
  })
}

const addEnroll = async (req, res) => {
  const {courseId} = req.body;
  const enroll = await db.Enroll.findOne({where: {userId: req.user.userID, courseId}})

  if(enroll) {

    if(enroll.isEnroll) {
      return res.status(201).json({
        status: true,
        message: 'You have already enrolled.',
      })
    }
    
    const result = await sequelize.transaction(async (t) => {
      await db.Enroll.update({isEnroll: true}, {where: {id: enroll.id}}, {transaction: t})
      const lesson = await db.Lesson.findOne({where: {courseId}})
      await db.LessonProgress.create({lessonId: lesson.id, userId: req.user.userID}, {transaction: t})
      return 'lesson enrolled.';
    });

    return  res.status(200).json({
              status: true,
              message: 'enroll created successfully',
              result
            })
  }

  const result = await sequelize.transaction(async (t) => {
    await db.Enroll.create({userId: req.user.userID, courseId}, {transaction: t})
    const lesson = await db.Lesson.findOne({where: {courseId}})
    await db.LessonProgress.create({lessonId: lesson.id, userId: req.user.userID}, {transaction: t})
    return 'lesson enrolled.';
    });

  res.status(200).json({
    status: true,
    message: 'enroll created successfully',
    result
  })
}

const leaveCourse = async (req, res) => {
  const {courseId} = req.body;
  const enroll = await db.Enroll.findOne({where: {userId: req.user.userID, courseId}})
  if(!enroll) {
  return res.status(201).json({
    status: true,
    message: 'You haven\'t enrolled yet.',
  })
  }

  const result = await sequelize.transaction(async (t) => {
    await db.Enroll.update({isEnroll: false}, {where: {id: enroll.id}}, {transaction: t})
    const lesson = await db.Lesson.findOne({where: {courseId}})
    await db.LessonProgress.destroy({where: {lessonId: lesson.id}}, {transaction: t})
    return 'lesson enrolled.';
    });
  res.status(201).json({
    status: true,
    message: 'Course is Un-Enrolled successfully',
    result
  })
}

const deleteEnroll = async (req, res) => {
  const { id } = req.params
  const enroll = await db.Enroll.destroy({ where: { id } })
  if (!enroll) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'enroll deleted successfully',
    data: enroll
  })
}

const updateEnroll = async (req, res) => {
  const { id } = req.params
  const enroll = await db.Enroll.update(req.body, {
    where: { id }
  })
  if (!enroll) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'enroll updated successfully',
    data: enroll
  })
}

module.exports = {
  getEnroll,
  getEnrollById,
  addEnroll,
  deleteEnroll,
  updateEnroll,
  leaveCourse
}
