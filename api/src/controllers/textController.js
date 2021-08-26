const db = require('../models')
const NotFoundError = require('../errors/notFoundError')

const getText = async (_req, res) => {
  const texts = await db.Text.findAll()
  if (!texts) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched all lesson text successfully',
    data: texts
  })
}

const getTextById = async (req, res) => {
  const { id } = req.params
  const text = await db.Text.findOne({ where: { id } })
  if (!text) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched lesson text successfully',
    data: text
  })
}

const addText = async (req, res) => {
  const { textHeading, textDescription, richtextId, order } = req.body
  const text = await db.Text.create({ textHeading, textDescription, richtextId, order })
  res.status(201).json({
    status: true,
    message: 'added new lesson text successfully',
    data: text
  })
}

const deleteText = async (req, res) => {
  const { id } = req.params
  await db.Text.destroy({ where: { id } })
  res.status(202).json({
    status: true,
    message: 'Lesson text deleted successfully'
  })
}

const updateText = async (req, res) => {
  const { id } = req.params
  const text = await db.Text.update(req.body, {
    where: { id }
  })
  if (!text) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'Lesson text updated successfully',
    data: text
  })
}

module.exports = {
  getText,
  getTextById,
  addText,
  deleteText,
  updateText
}
