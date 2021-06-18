const Sequelize = require('sequelize')
const Op = Sequelize.Op
const db = require('../models');

// @desc    Fetch all enterprises
// @route   GET /api/enterprises
// @access  Public
const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize
  return { offset, limit }
}

// @desc Fetch all enterprises by a community
// @route GET/api/enterprises/community/:id
// @access Pirvate

const getEnterprises = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 0
  const order = req.query.order || 'DESC'
  const ordervalue = order && [['title', order]]

  db.Enterprise.findAll({ 
    offset: page, 
    limit: pageSize, ordervalue,
    include: [{
      model: db.Community,
      attributes: ['id'],
      where: {id: req.params.id },
    }]
   })
    .then(enterprises => {
      paginate({ page, pageSize })
      if(!enterprises) return res.json({message: 'Enterprises donesn\'t exists.'});
      res.json({ enterprises, page, pageSize }).status(200)
    })
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Add individual enterprises
// @route   POST /api/enterprises/add/community/:id
// @access  Public
const addEnterprises = (req, res) => {
  let filename = ''
  if (req.file) {
    filename = req.file.filename
  }
  db.Enterprise.create({ ...req.body, communityId: req.params.id , slug: "", filename })
    .then(() => res.json({ message: 'Enterprises Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Fetch single enterprises
// @route   GET /api/enterprises/:enterpriseId/community/:id
// @access  Public
const getEnterprisesById = (req, res) => {
  const id = req.params.enterpriseId

  db.Enterprise.findByPk(id,
    {
      include: [{
      model: db.Community,
      attributes: ['id'],
      where: {id: req.params.id },
    }]
    }
    )
    .then(enterprises => {
      if (enterprises) {
        res.json(enterprises)
      } else {
        res.status(404)
        throw new Error('Enterprises not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Delete single enterprises
// @route   DELETE /api/enterprises/:enterpriseId/community/:id
// @access  Private
const deleteEnterprises = (req, res) => {
    db.Enterprise.findByPk(req.params.enterpriseId,
    {
      include: [{
      model: db.Community,
      attributes: ['id'],
      where: {id: req.params.id },
    }]
    }
    ).then(enterprises => {
    if (enterprises) {
      const { id } = enterprises
      db.Enterprise.destroy({ where: { id } })
        .then(() => res.json({ message: 'Enterprises Deleted !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Enterprises not found')
    }
  }).catch((err) => res.json({ error: err.message }).status(400));
}

// @desc    Update a enterprises
// @route   UPDATE /api/enterprises/:enterpriseId/community/:id
// @access  Private
const updateEnterprises = (req, res) => {
  const {
    title, description, roles, attachments
  } = req.body
  const id = req.params.enterpriseId
  db.Enterprise.findByPk(id,
    {
      include: [{
      model: db.Community,
      attributes: ['id'],
      where: {id: req.params.id },
    }]
    }
    ).then(enterprises => {
    if (enterprises) {
      const { id } = enterprises
      db.Enterprise.update({
        title, description, roles, attachments
      },
      { where: { id } })
        .then(() => res.json({ message: 'Enterprises Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Enterprises not found')
    }
  }).catch((err) => res.json({ error: err.message }).status(400));
}

// @desc    Search title
// @route   GET /api/enterprises/:enterpriseId/community/:id/search
// @access  Private
const searchEnterprisesTitle = (req, res) => {
  const { title } = req.query
  const order = req.query.order || 'ASC'

  db.Enterprise.findAll({ 
  where: { title: { [Op.iLike]: '%' + title + '%' } }, 
  order: [['title', order]],
  include: [{
      model: db.Community,
      attributes: ['id'],
      where: {id: req.params.id },
    }]
})
    .then(enterprises => res.json({ enterprises }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { getEnterprises, addEnterprises, getEnterprisesById, deleteEnterprises, updateEnterprises, searchEnterprisesTitle }
