const Sequelize = require('sequelize')
const db = require('../config/database')

const Groups = db.define('groups',
  {
    title: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },
    category: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  },
  { timestamps: true }
)

module.exports = Groups
