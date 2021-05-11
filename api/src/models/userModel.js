const Sequelize = require('sequelize')
const db = require('../config/database.js')

const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  dateOfBirth: {
    type: Sequelize.DATE
  },
  lastLogin: {
    type: Sequelize.DATE
  },
  numberOfVisit: {
    type: Sequelize.DOUBLE
  },
  attachments: {
    type: Sequelize.Sequelize.BLOB('long')
  },
  name: {
    type: Sequelize.STRING
  }
}, { timestamps: false })

module.exports = User
