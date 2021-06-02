const CollectionUser = require('../models/collectionUserModel')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// @desc Fetch all collection_user
// @route Get/api/collection_user
// @access Private

const paginate = ({ page, pageSize }) => {
  const offset = page * pageSize
  const limit = offset + pageSize

  return {
    offset,
    limit
  }
}

const addCollectionUser = (req, res) => {
  const { userid, collection } = req.body
  CollectionUser.create({
    userid,
    collection

  })
    .then(() => res.json({ message: 'Collection User Created !!!' }).status(200))
    .catch((err) => res.json({ error: err.message }).status(400))
}

module.exports = { addCollectionUser }
