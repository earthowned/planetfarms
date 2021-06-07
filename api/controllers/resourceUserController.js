const ResourceUser = require('../models/resourceUserModel')
const Resource = require('../models/resourceModel')
const Sequelize = require('sequelize')
const User = require('../models/userModel')
const Op = Sequelize.Op

// @desc Fetch all course
// @route GET/api/courses
// @access Public

const getResourceUser = (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1
  const order = req.query.order || 'ASC'
  ResourceUser.findAll({ include: [Resource] })
    .then(items => {
      res.json({ items }).status(200)
    })
    .catch((error) => res.json({ error }).status(400))
}

// @desc Add individual collection
// @route POST /api/resourceUser/add
// @access Private

const addResourceUser = (req, res) => {
  const user = User.findOne({ where: { id: req.body.userId } })

  const { resourceId } = req.body
  ResourceUser.create({
    userId: user, resourceId
  })
    .then(() => res.json({ message: 'Resource User Created !!!' }).this.status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

module.exports = { addResourceUser, getResourceUser }
