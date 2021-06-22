const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Lessons = db.define(
  'lessons',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    courseId: {
      type: Sequelize.STRING
    },
    lessonId: {
      type: Sequelize.STRING
    },
    steps: {
      type: Sequelize.JSON
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

module.exports = Lessons
