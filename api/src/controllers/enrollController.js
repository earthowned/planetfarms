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
  const { courseId } = req.body
  const enroll = await db.Enroll.findOne({ where: { userId: req.user.id, courseId } })

  if (enroll) {
    if (enroll.isEnroll) {
      return res.status(201).json({
        status: true,
        message: 'You have already enrolled.'
      })
    }

    const enrolledUser = await db.Enroll.update({ isEnroll: true }, { where: { id: enroll.id } })

    return res.status(200).json({
      status: true,
      message: 'enroll created successfully',
      enrolledUser
    })
  }

  const enrolledUser = await db.Enroll.create({ userId: req.user.id, courseId })

  res.status(200).json({
    status: true,
    message: 'enroll created successfully',
    enrolledUser
  })
}

const leaveCourse = async (req, res) => {
  const { courseId } = req.body
  const enroll = await db.Enroll.findOne({ where: { userId: req.user.id, courseId } })
  if (!enroll) {
    return res.status(201).json({
      status: true,
      message: 'You haven\'t enrolled yet.'
    })
  }

  await db.Enroll.update({ isEnroll: false }, { where: { id: enroll.id } })
  res.status(201).json({
    status: true,
    message: 'Course is Un-Enrolled successfully'
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
