const Sequelize = require('sequelize')
const db = require('../config/database.js')

const CollectionUser = db.define('collection_user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER
    },
    collectionId: {
      type: Sequelize.INTEGER
    }

  },
  { timestamps: true }
)

CollectionUser.associate = (models) => {
  CollectionUser.belongsTo(models.User, {
    as: 'userfollower',
    foreignKey: 'userId'
  })
  CollectionUser.belongsTo(models.Collection, {
    as: 'collectionInfo',
    foreignKey: 'collectionId'
  })
}

module.exports = CollectionUser
