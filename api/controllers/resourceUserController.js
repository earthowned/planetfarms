const ResourceUser = require('../models/resourceUserModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// @desc Add individual collection
// @route POST /api/resourceUser/add
// @access Private

const addResourceUser = (req, res) => {
  const { userId, resourceId } = req.body
  ResourceUser.create({
    userId, resourceId
  })
    .then(() => res.json({ message: 'Resource User Created !!!' }).this.status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

module.exports = { addResourceUser }
