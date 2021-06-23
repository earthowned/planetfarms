const Sequelize = require('sequelize')
const db = require('../config/database.js')

const UserProfile = db.define('userProfiles', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userID: {
    type: Sequelize.INTEGER
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.TEXT
  },
  dateOfBirth: {
    type: Sequelize.DATE
  },
  lastLogin: {
    type: Sequelize.DATE
  },
  numberOfVisit: {
    type: Sequelize.INTEGER
  },
  attachments: {
    type: Sequelize.TEXT
  }
}, { timestamps: false })

module.exports = UserProfile
