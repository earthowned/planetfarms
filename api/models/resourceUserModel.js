const Sequelize = require('sequelize')
const db = require('../config/database.js')

const ResourceUser = db.define('resource_users',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER
    },
    resourceId: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: true }
)

ResourceUser.associate = (models) => {
  ResourceUser.belongsTo(models.User, {
    as: 'users',
    foreignKey: 'userId'
  })
  ResourceUser.belongsTo(models.Resource, {
    as: 'resources',
    foreignKey: 'resourceId'
  })
}

module.exports = ResourceUser
