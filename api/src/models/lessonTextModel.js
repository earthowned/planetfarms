const Sequelize = require('sequelize')
const db = require('../config/database.js')

const LessonText = db.define(
  'lessonTexts',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    textHeading: {
      type: Sequelize.STRING,
    },
    textDescription: {
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

module.exports = LessonText
