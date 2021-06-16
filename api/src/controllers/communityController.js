const db = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// @desc Fetch all communities
// @route GET/api/communities
// @access Public
const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize
  return { offset, limit }
}

const getCommunities = async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  // const order = req.query.order || 'DESC'
  // const ordervalue = order && [['name', order]]
  db.Community.findAll({
    offset: page,
    limit: pageSize,
    // ordervalue,
    order: [['createdAt', 'DESC']],
    include: [{
      model: db.User,
      as: 'followers',
      attributes: ['id'],
      through: {
        attributes: ['active'],
        as: 'followStatus'
      }
    }],
  })
    .then(communities => {
      paginate({ page, pageSize })
      res.json({ communities, page, pageSize }).status(200)
    })
    .catch((err) => res.json({ err }).status(400))
}

// @desc Add individual communities
// @route POST /api/communities/add
// @access Private
const createCommunity = (req, res) => {
  let filename = ''
  if (req.file) {
    filename = req.file.filename
  }

  if (!req.body.creatorId) {
    return res.json({ message: 'Not authorized to create.' })
  }

  db.Community.create({ ...req.body, attachment: 'uploads/' + filename })
    .then(() => res.json({ message: 'Community is Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc Fetch single communities
// @route GET /api/communities/:id
// @access Public
const getCommunityById = (req, res) => {
  const id = req.params.id

  db.Community.findByPk(id, {
    include: [{
      model: db.User,
      as: 'creator'
    },
    {
      model: db.User,
      as: 'followers'
    }
    ]
  })
    .then(communities => {
      if (communities) {
        res.json(communities)
      } else {
        res.status(404)
        throw new Error('Community not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc Delete single groups
// @route GET /api/communities/:id
// @access Private
const deleteCommunity = (req, res) => {
  const id = req.params.id

  if (!req.body.creatorId) {
    return res.json({ message: 'Not authorized to delete.' })
  }

  db.Community.findByPk(id).then(communities => {
    if (communities) {
      const { id } = communities
      if (communities.creatorId !== req.body.creatorId) {
        return res.json({ message: 'Not authorized to delete.' })
      }
      db.Community.destroy({ where: { id } })
        .then(() => res.json({ message: 'Community Deleted!!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Community not found')
    }
  })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc Update a communities
// @route PUT /api/communities/:id
// @access Private
const updateCommunity = (req, res) => {
  const {
    name, description, creatorId
  } = req.body

  let filename = ''
  if (req.file) {
    filename = req.file.filename
  }

  if (!creatorId) {
    return res.json({ message: 'Not authorized to update.' })
  }
  const id = req.params.id
  db.Community.findByPk(id).then(communities => {
    if (communities) {
      const { id } = communities
      if (communities.creatorId !== creatorId) {
        return res.json({ message: 'Not authorized to update.' })
      }
      db.Community.update({
        name,
        description,
        creatorId: creatorId,
        attachment: 'uploads/' + filename
      },
      { where: { id } })
        .then(() => res.json({ message: 'Community Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Community not found')
    }
  })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc Search name
// @route POST /api/communities/search
// @access Private
const searchCommunityName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  db.Community.findAll({ where: { name: { [Op.iLike]: '%' + name + '%' } }, order: [['name', order]] })
    .then(communities => res.json({ communities }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getCommunities, createCommunity, getCommunityById, deleteCommunity, updateCommunity, searchCommunityName }
