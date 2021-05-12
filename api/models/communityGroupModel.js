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
    attachments: {
      type: Sequelize.BLOB('long')
    }
  },
  { timestamps: true }
)

module.exports = Groups
