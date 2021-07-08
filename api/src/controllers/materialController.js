const Material = require('../models/materialModel')
const NotFoundError = require('../errors/notFoundError')

const getMaterials = async (_req, res) => {
  const data = await Material.findAll()
  if (!data) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched all materials successfully',
    data: data
  })
}
const getMaterialById = async (req, res) => {
  const { id } = req.params
  const data = await Material.findOne({ where: { id } })
  if (!data) {
    throw new NotFoundError()
  }
  res.status(200).json({
    status: true,
    message: 'fetched material successfully',
    data: data
  })
}
const addMaterial = async (req, res) => {
  let material = ''
  let name = ''
  if (req.file) {
    material = req.file.filename
    name = req.file.originalname
  }
  const data = await Material.create({ ...req.body, material, name })
  res.status(201).json({
    status: true,
    message: 'Materail added successfully',
    data: data
  })
}
const deleteMaterial = async (req, res) => {
  const { id } = req.params
  const data = await Material.destroy({ where: { id } })
  if (!data) {
    throw new NotFoundError()
  }
  res.status(202).json({
    status: true,
    message: 'Material deleted successfully',
    data: data
  })
}

const updateMaterial = async (req, res) => {
  const { id } = req.params
  const data = await Material.update(req.body, {
    where: { id }
  })
  res.status(202).json({
    status: true,
    message: 'Material updated successfully',
    data: data
  })
}

module.exports = {
  getMaterials,
  getMaterialById,
  addMaterial,
  deleteMaterial,
  updateMaterial
}
