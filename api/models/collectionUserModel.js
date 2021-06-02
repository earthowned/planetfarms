const Sequelize = require('sequelize')
const db = require('../config/database.js')

const CollectionUser = db.define('collection_user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userid: {
      type: Sequelize.INTEGER
    },
    collection: {
      type: Sequelize.INTEGER
    }

  },
  { timestamps: true }
)

CollectionUser.associate = (models) => {
  CollectionUser.belongsTo(models.User, {
    as: 'users',
    foreignKey: 'userid'
  })
  CollectionUser.belongsTo(models.Collection, {
    as: 'collections',
    foreignKey: 'collection'
  })
}

module.exports = CollectionUser
