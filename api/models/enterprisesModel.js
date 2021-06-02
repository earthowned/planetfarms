const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Enterprises = db.define(
  'enterprises',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },
    filename: {
      type: Sequelize.STRING
    },
    category: {
      type: Sequelize.STRING
    }
  },
  { timestamps: true }
)

module.exports = Enterprises
