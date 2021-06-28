const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Lessons = db.define(
  'lessons',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
    },
    coverImg: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  },
  { timestamps: true }
)

module.exports = Lessons
