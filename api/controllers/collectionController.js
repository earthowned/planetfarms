const Collection = require("../models/collectionModel")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

// @desc    Fetch all collection
// @route   GET /api/collection
// @access  Public

const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize

  return {
    offset,
    limit
  }
}

const getCollection = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'DESC'
  const ordervalue = order && [['title',  order]] 
  Collection.findAll({ offset: page, limit: pageSize,ordervalue})
    .then((collection) => {
      paginate({ page, pageSize })
      res.json({ collection }).status(200)
    })

    .catch((err) => res.json({ err }).status(400))
}

// @desc    Fetch single collection
// @route   GET /api/collection/:id
// @access  Public
const getCollectionById = (req, res) => {
  const id = req.params.id

  Collection.findByPk(id)
    .then(collection => {
      if (collection) {
        res.json(collection)
      } else {
        res.status(404)
        throw new Error('Collection not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Add individual collection
// @route   POST /api/collection/add
// @access  Public
//@todo we have to work on  relation mapping betweenn collection and resources

const addcollection = (req, res) => {
  const { name, docType, resourceType, linkId } = req.body
  Collection.create({
    name,
    docType,
    resourceType,
    linkId,
  })
    .then(() => res.json({ message: "Collection Created !!!" }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Update a collection
// @route   PUT /api/collection/:id
// @access  Public

const updateCollection = (req, res) => {
  const {
    name, docType, resourceType, linkId
  } = req.body
  const id = req.params.id
  Collection.findByPk(id).then(collection => {
    if (collection) {
      const { id } = collection
      Collection.update({
       name,
        docType,
        resourceType,
        linkId,
      },
      { where: { id } })
        .then(() => res.json({ message: 'Collection Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('Collection not found')
  })
}

// @desc    Delete a collection
// @route   Delete /api/collection/:id
// @access  Public

const deleteCollection = (req, res) => {
  const id = req.params.id
  Collection.findByPk(id).then(collection => {
    if (collection) {
      const { id } = collection
      Collection.destroy({ where: { id } })
        .then(() => res.json({ message: 'Collection Deleted !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Collection not found')
    }
  })
}

// @desc    Search title
// @route   POST /api/collection/search
// @access  Private
const searchCollectionTitle = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  Collection.findAll({ where: { name: { [Op.iLike]: '%' + name + '%' } }, order: [['name', order]] })
    .then(collection => res.json({ collection }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}


module.exports = { addcollection, getCollection,updateCollection,deleteCollection,searchCollectionTitle,getCollectionById }
