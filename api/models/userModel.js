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

module.exports = User
