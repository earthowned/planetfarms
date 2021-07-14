const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Category = db.define(
  'categories',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  { timestamps: true }
)

module.exports = Category
