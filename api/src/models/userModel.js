const Sequelize = require('sequelize')
const db = require('../config/database.js')

const User = db.define('users', {
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
}, { timestamps: false })

User.associate = function (models) {
  User.hasMany(models.CollectionUser, {
    as: 'user',
    foreignKey: 'id'
  })
}
User.associate = function (models) {
  User.hasMany(models.ResourceUser, {
    as: 'user',
    foreignKey: 'id'
  })
}

module.exports = User
