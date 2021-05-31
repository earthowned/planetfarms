const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Collection = db.define(
  'collections',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.TEXT
    },
    docType: {
      type: Sequelize.TEXT
    },
    resourceType: {
      type: Sequelize.TEXT
    },
    linkId: {
      type: Sequelize.INTEGER
    },
    filename: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  },
  { timestamps: true }
)

module.exports = Collection
