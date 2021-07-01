const Sequelize = require('sequelize')
const db = require('../config/database.js')

const LocalAuth = db.define('localauths', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
})

module.exports = LocalAuth
