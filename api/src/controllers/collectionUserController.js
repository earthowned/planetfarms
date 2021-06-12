const CollectionUser = require('../models/collectionUserModel')
const Collection = require('../models/collectionModel')
const Sequelize = require('sequelize')
const User = require('../models/userModel')
const Op = Sequelize.Op

// @desc Fetch all collection_user
// @route Get/api/collection_user
// @access Private
const getControllerUser = (req, res) => {
  CollectionUser.findAll({ include: [{ model: Collection, as: 'collectionInfo' }, { model: User, as: 'user' }] })
    .then(items => {
      res.json({ items }).status(200)
    })
    .catch((err) => res.json({ err }).status(400))
}

// @desc Add individual collection user
const addCollectionUser = async (req, res) => {
  const { userId, collectionId } = req.body
  const userExists = await User.findOne({ where: { id: userId } })
  const collectionExits = await Collection.findOne({ where: { id: collectionId } })
  const collectionUserExists = await CollectionUser.findOne({ where: { collectionId, userId } })
  if (collectionUserExists) {
    res.status(400).json({ error: 'User Already added collection' })
  }
  if (userExists && collectionExits) {
    CollectionUser.create({
      userId,
      collectionId

    })
      .then(() => res.json({ message: 'Collection User Created !!!' }).status(200))
      .catch((err) => res.json({ error: err.message }).status(400))
  } else {
    res.status(400).json({ error: 'User Not Found' })
  }
}

// @desc Update a collection user

const updateCollectionUser = (req, res) => {
  CollectionUser.findByPk(id).then(collectionUser => {
    if (collectionUser) {
      const { id } = collectionUser
      CollectionUser.update(
        req.body,
        { where: { id } })
        .then(() => res.json({ message: 'Collection user updated !!!' }))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(400)
    throw new Error('Collection User not found')
  })
}

// @desc Delete a collectionUser
const deleteController = (req, res) => {
  const id = req.params.id
  CollectionUser.findByPk(id).then(controllerUser => {
    if (controllerUser) {
      const { id } = controllerUser
      CollectionUser.destroy({ where: { id } })
        .then(() => res.json({ message: 'Controller User Delete!!!' }))
        .catch((err) => res.json({ err: err.message }).status(400))
    } else {
      res.status(404)
      throw new Error('Controller User not found')
    }
  })
}

module.exports = { addCollectionUser, getControllerUser, updateCollectionUser, deleteController }
