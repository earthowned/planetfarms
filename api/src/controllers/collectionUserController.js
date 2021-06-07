const CollectionUser = require('../models/collectionUserModel')
const Collection = require('../models/collectionModel')
const Sequelize = require('sequelize')
const User = require('../models/userModel')
const Op = Sequelize.Op

// @desc Fetch all collection_user
// @route Get/api/collection_user
// @access Private
const getControllerUser = (res, req) => {
  CollectionUser.findAll({ include: [{ model: Collection, as: 'collection' }, { model: User, as: 'user' }] })
    .then(items => {
      res.json({ items })
    })
    .catch((err) => res.json({ err }).status(400))
}

const addCollectionUser = (req, res) => {
  const { userId, collectionId } = req.body
  CollectionUser.create({
    userId,
    collectionId

  })
    .then(() => res.json({ message: 'Collection User Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

module.exports = { addCollectionUser, getControllerUser }
