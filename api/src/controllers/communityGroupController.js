const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../models')

const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize
  return { offset, limit }
}

// @desc Fetch all groups by a community
// @route GET/api/groups/community/:id
// @access Public

const getGroups = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const order = req.query.order || 'DESC'
  const ordervalue = order && [['title', order]]

  db.Group.findAndCountAll({
    offset: (page - 1),
    limit: pageSize,
    ordervalue,
    include: [{
      model: db.Community,
      attributes: ['id'],
      where: { id: req.params.id }
    }]
  })
    .then(groups => {
      const totalPages = Math.ceil(groups.count / pageSize)
      res.json({ 
        groups: groups.rows,
        totalItems: groups.count,
        totalPages,
        page, 
        pageSize 
       }).status(200)
    })

    .catch((err) => res.json({ err }).status(400))
}

// @desc Add individual groups
// @route POST /api/groups/add/community/:id
// @access Private
const addGroups = (req, res) => {
  let filename = ''
  if (req.file) {
    filename = req.file.filename
  }

  db.Group.create({ ...req.body, communityId: req.params.id, filename, slug: '' })
    .then(() => res.json({ message: 'Community Group Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc Fetch single groups
// @route GET /api/groups/:groupId/community/:id
// @access Public
const getGroupsById = (req, res) => {
  db.Group.findByPk(req.params.groupId, {
    include: [
      {
        model: db.Community,
        attributes: [],
        where: { id: req.params.id }
      }
    ]
  })
    .then(groups => {
      if (groups) {
        res.json(groups)
      } else {
        res.status(404)
        throw new Error('Community Groups not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc Delete single groups
// @route GET /api/groups/:groupId/community/:id
// @access Private
const deleteGroups = (req, res) => {
  const id = req.params.groupId

  db.Group.findByPk(id, {
    include: [{
      model: db.Community,
      attributes: [],
      where: { id: req.params.id }
    }]
  })
    .then(groups => {
      if (groups) {
        const { id } = groups
        db.Group.destroy({ where: { id } })

          .then(() => res.json({ message: 'Groups Deleted!!!' }).status(200))
          .catch((err) => res.json({ error: err.message }).status(400))
      } else {
        return res.status(404).json({ message: 'Groups not found' })
      }
    })
}

// @desc Update a groups
// @route PUT /api/groups/:groupId/community/:id
// @access Public
const updateGroups = (req, res) => {
  const {
    title, description, category, attachments
  } = req.body

  const id = req.params.groupId

  db.Group.findByPk(id,
    {
      include: [{
        model: db.Community,
        attributes: [],
        where: { id: req.params.id }
      }]
    }
  ).then(groups => {
    if (groups) {
      const { id } = groups
      db.Group.update({
        title, description, category, attachments
      },
      { where: { id } })
        .then(() => res.json({ message: 'Groups Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      return res.status(404).json({ message: 'Groups not found' })
    }
  })
}

// @desc Search title
// @route POST /api/groups/community/:id/search
// @access Private
const searchGroupsTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  db.Group.findAll({
    where: { title: { [Op.iLike]: '%' + title + '%' } },
    order: [['title', order]],
    include: [{
      model: db.Community,
      attributes: [],
      where: { id: req.params.id }
    }]
  })
    .then(groups => res.json({ groups }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getGroups, addGroups, getGroupsById, deleteGroups, updateGroups, searchGroupsTitle }
