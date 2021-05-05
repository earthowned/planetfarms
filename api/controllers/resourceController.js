const Resource = require('../models/resourceModel.js')
const Sequelize = require('sequelize')
const queryUtils = require('../utils/query.js')
const Op = Sequelize.Op

// @desc    Fetch all resources
// @route   GET /api/resources
// @access  Public
const getResources = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
<<<<<<< HEAD
  const order = req.query.order || 'ASC'
  const ordervalue = order && [['title', order]]
  // const {offset, limit} = queryUtils.paginate({ page, pageSize })
  Resource.findAll({ offset: page, limit: pageSize, ordervalue })
=======
  const order = req.query.order || 'DESC'
  const ordervalue = order && [['title',  order]] 
  Resource.findAll({ offset: page, limit: pageSize,ordervalue  })
>>>>>>> 1c1fba13 (resource listing api)
    .then(resources => {
      res.json({ resources, page, pageSize }).status(200)
    })
    
    .catch((err) => res.json({ err }).status(400))
}



// @desc    Add individual resource
// @route   POST /api/resources/add
// @access  Public
const addResource = (req, res) => {
  const {
    title, author, year, description, tag, language, publisher, linkToLicense, subject, level, mediaType, resourceFor, openWith, resourceType, isDownloadable, attachments
  } = req.body
  /* if (req.file) {
    categoryObj.categoryImage =
      process.env.API + '/public/' + req.file.filename;
  } */
  Resource.create({
    title, author, year, description, tag, language, publisher, linkToLicense, subject, level, mediaType, resourceFor, openWith, resourceType, isDownloadable, attachments
  })
    .then(() => res.json({ message: 'Resource Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Fetch single resource
// @route   GET /api/resource/:id
// @access  Public
const getResourcesById = (req, res) => {
  const id = req.params.id

  Resource.findByPk(id)
    .then(resource => {
      if (resource) {
        res.json(resource)
      } else {
        res.status(404)
        throw new Error('Resource not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

const deleteResources = (req, res) => {
  const id = req.params.id
  Resource.findByPk(id).then(resource => {
    if (resource) {
      const { id } = resource
      Resource.destroy({ where: { id } })
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
  const {
    title, author, year, description, tag, language, publisher, linkToLicense, subject, level, mediaType, resourceFor, openWith, resourceType, isDownloadable, attachments
  } = req.body
  const id = req.params.id
  Resource.findByPk(id).then(resource => {
    if (resource) {
      const { id } = resource
      Resource.update({
        title, author, year, description, tag, language, publisher, linkToLicense, subject, level, mediaType, resourceFor, openWith, resourceType, isDownloadable, attachments
      },
      { where: { id } })
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

  Resource.findAll({ where: { title: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(resources => res.json({ resources }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getResources, addResource, getResourcesById, deleteResources, updateResources, searchResourcesTitle }
