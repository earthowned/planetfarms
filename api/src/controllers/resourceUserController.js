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
  ResourceUser.findAll({ include: [{ model: User, as: 'userfollower' }, { model: Resource, as: 'resourceInfo' }] })
    .then(items => {
      res.json({ items }).status(200)
    })
    .catch((error) => res.json({ error }).status(400))
}

// @desc Add individual resource User
// @route POST /api/resourceUser/add
// @access Private

const addResourceUser = async (req, res) => {
  // const user = User.findOne({ where: { id: req.body.id } })

  const { userId, resourceId } = req.body
  const userExists = await User.findOne({ where: { id: userId } })
  const resourceExists = await Resource.findOne({ where: { id: resourceId } })
  const resourceUserExists = await ResourceUser.findOne({ where: { resourceId, userId } })
  if (resourceUserExists) {
    res.status(400).json({ error: 'User Already added resource' })
  }
  if (userExists && resourceExists) {
    ResourceUser.create({
      userId, resourceId
    })
      .then(() => res.json({ message: 'Resource User Created !!!' }).this.status(200))
      .catch((err) => res.json({ error: err.message }).status(400))
  } else {
    res.status(400).json({ error: 'User Not Found' })
  }
}

// @desc    Update a ResourceUser
// @route   PUT /api/ResourceUser/:id
// @access  Public

const updateResourceUser = (req, res) => {
  const id = req.params.id
  ResourceUser.findByPk(id).then(resourceUser => {
    if (resourceUser) {
      const { id } = resourceUser
      ResourceUser.update(
        req.body,
        { where: { id } })
        .then(() => res.json({ message: 'Resource User updated !!' }))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('Resource User not found')
  })
}

// @desc    Delete a resourceUser
// @route   Delete /api/resourceUser/:id
// @access  Public
const deleteResourceUser = (req, res) => {
  const id = req.params.id
  ResourceUser.findByPk(id).then(resourceUser => {
    if (resourceUser) {
      const { id } = resourceUser
      ResourceUser.destroy({ where: { id } })
        .then(() => res.json({ message: 'Resource User Deleted !!!' }))
        .catch((err) => res.json({ err: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Resource User not found')
    }
  })
}

module.exports = { addResourceUser, getResourceUser, updateResourceUser, deleteResourceUser }
