const Sequelize = require('sequelize')
const User = require('./userModel')
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
  ResourceUser.belongsToMany(models.User, {
    foreignKey: 'userId',
    as: 'user'
  })
  ResourceUser.belongsToMany(models.Resource, {
    foreignKey: 'resourceId',
    as: 'resource'
  })
}

module.exports = ResourceUser
