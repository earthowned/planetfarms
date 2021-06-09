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
    as: 'userfollower',
    foreignKey: 'userId'
  })
}
User.associate = function (models) {
  User.hasMany(models.ResourceUser, {
    as: 'userfollower',
    foreignKey: 'userId'
  })
}

module.exports = User
