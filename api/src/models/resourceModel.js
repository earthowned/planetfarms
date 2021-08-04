const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Resources = db.define('resources',
  {
    title: {
      type: Sequelize.TEXT
    },
    filename: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    resourceType: {
      type: Sequelize.STRING
    }
  },
  { timestamps: true }
)

module.exports = Resources
