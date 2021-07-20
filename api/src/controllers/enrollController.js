const db = require('../models')
const NotFoundError = require('../errors/notFoundError')

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
  const enroll = db.Enroll.create(req.body)
  res.status(201).json({
    status: true,
    message: 'enroll created successfully',
    data: enroll
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
  updateEnroll
}
