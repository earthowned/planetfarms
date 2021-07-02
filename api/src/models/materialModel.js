const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Material = db.define(
  'materials',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    material: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    }
  },
  { timestamps: true }
)

module.exports = Material
