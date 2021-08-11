const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { changeFormat } = require('../helpers/filehelpers')
const { where } = require('sequelize')

// @desc    Fetch all resources
// @route   GET /api/resources?pageNumber=${pageNumber}&category=${category}
// @access  Public
const getResources = (req, res) => {
  const { category, search, pageNumber = 1, pageSize = 5 } = req.query
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['title', order]]
  db.Resource.findAndCountAll({
    offset: (pageNumber - 1) * pageSize,
    limit: pageSize,
    ordervalue,
    where: {
      ...(search ? { title: { [Op.iLike]: '%' + search + '%' } } : {}),
      ...(category ? { resourceType: category } : {})
    },
    distinct: true
  })
    .then((resources) => {
      const totalPages = Math.ceil(resources.count / pageSize)
      res
        .json({
          resources: resources.rows.map((rec) => ({
            ...rec.dataValues,
            filename: changeFormat(rec.filename)
          })),
          totalItems: resources.count,
          totalPages,
          page,
          pageSize
        })
        .status(200)
    })
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual resource
// @route   POST /api/resources/add
// @access  Public
const addResource = (req, res) => {
  let filename = ''
  if (req.file) {
    filename = req.file.filename
  }
  db.Resource.create({ ...req.body, filename })
    .then(() => res.json({ message: 'Resource Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Fetch single resource
// @route   GET /api/resource/:id
// @access  Public
const getResourcesById = (req, res) => {
  const id = req.params.id
  db.Resource.findByPk(id)
    .then((resource) => {
      if (resource) {
        res.json({ ...resource, filename: changeFormat(resource.filename) })
      } else {
        res.status(404)
        throw new Error('Resource not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

const deleteResources = (req, res) => {
  const id = req.params.id
  db.Resource.findByPk(id).then((resource) => {
    if (resource) {
      const { id } = resource
      db.Resource.destroy({ where: { id } })
        .then(() => res.json({ message: 'Resource Deleted !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Resource not found')
    }
  })
}

// @desc    Update a resource
// @route   PUT /api/resource/:id
// @access  Public
const updateResources = (req, res) => {
  const id = req.params.id
  db.Resource.findByPk(id).then((resource) => {
    if (resource) {
      const { id } = resource
      db.Resource.update(req.body, { where: { id } })
        .then(() => res.json({ message: 'Resource Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('Resource not found')
  })
}

// @desc    Search title
// @route   POST /api/resource/search
// @access  Private
const searchResourcesTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'
  db.Resource.findAll({
    where: { title: { [Op.iLike]: '%' + title + '%' } },
    order: [['title', order]]
  })
    .then((resources) =>
      res
        .json(
          resources.map((rec) => ({
            ...rec,
            filename: changeFormat(rec.filename)
          }))
        )
        .status(200)
    )
    .catch((err) => res.json({ error: err }).status(400))
}

module.exports = {
  getResources,
  addResource,
  getResourcesById,
  deleteResources,
  updateResources,
  searchResourcesTitle
}
