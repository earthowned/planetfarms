const Sequelize = require('sequelize')
const db = require('../config/database')

const Community = db.define('communities',
  {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    attachment: {
      type: Sequelize.STRING
    }
  },
  { timestamps: true }
)

module.exports = Community
