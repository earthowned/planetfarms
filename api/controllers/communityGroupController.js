const Groups = require('../models/communityGroupModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// @desc Fetch all groups
// @route GET/api/groups
// @access Public
const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize

  return {
    offset,
    limit
  }
}

const getGroups = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'DESC'
  const ordervalue = order && [['title', order]]
  Groups.findAll({ offset: page, limit: pageSize, ordervalue })
    .then(groups => {
      paginate({ page, pageSize })
      res.json({ groups, page, pageSize }).status(200)
    })

    .catch((err) => res.json({ err }).status(400))
}

// @desc Add individual groups
// @route POST /api/groups/add
// @access Public
const addGroups = (req, res) => {
  const {
    title, description, category, attachments
  } = req.body

  Groups.create({
    title, description, category, attachments
  })
    .then(() => res.json({ message: 'Community Group Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc Fetch single groups
// @route GET /api/groups/:id
// @access Public
const getGroupsById = (req, res) => {
  const id = req.params.id

  Groups.findByPk(id)
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
// @route GET /api/groups/:id
// @access Public
const deleteGroups = (req, res) => {
  const id = req.params.id
  Groups.findByPk(id).then(groups => {
    if (groups) {
      const { id } = groups
      Groups.destroy({ where: { id } })
        .then(() => res.json({ message: 'Groups Deleted!!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Groups not found')
    }
  })
}

// @desc Update a groups
// @route PUT /api/groups/:id
// @access Public
const updateGroups = (req, res) => {
  const {
    title, description, category, attachments
  } = req.body

  const id = req.params.id
  Groups.findByPk(id).then(groups => {
    if (groups) {
      const { id } = groups
      Groups.update({
        title, description, category, attachments
      },
      { where: { id } })
        .then(() => res.json({ message: 'Groups Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('Groups not found')
  })
}

// @desc Search title
// @route POST /api/groups/search
// @access Private
const searchGroupsTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  Groups.findAll({ where: { title: { [Op.iLike]: '%' + title + '%' } }, order: [['title', order]] })
    .then(groups => res.json({ groups }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getGroups, addGroups, getGroupsById, deleteGroups, updateGroups, searchGroupsTitle }
