const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Collection = db.define(
  'collections',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.TEXT
    },
    docType: {
      type: Sequelize.TEXT
    },
    resourceType: {
      type: Sequelize.TEXT
    },
    linkId: {
      type: Sequelize.INTEGER
    },
    filename: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  },
  { timestamps: true }
)

Collection.associate = function (models) {
  Collection.hasMany(models.CollectionUser, {
    as: 'collection_user',
    foreignKey: 'collection'
  })
}

module.exports = Collection
