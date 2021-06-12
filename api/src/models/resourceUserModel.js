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
  ResourceUser.belongsTo(User)

  ResourceUser.belongsTo(models.Resource, {
    foreignKey: 'resourceId'

  })
}

module.exports = ResourceUser
