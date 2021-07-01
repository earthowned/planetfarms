const Sequelize = require('sequelize')
const db = require('../config/database.js')

const LessonPhoto = db.define(
  'lessonPhotos',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    photoDescription: {
      type: Sequelize.STRING,
    },
    lessonImg: {
      type: Sequelize.STRING,
    },
    isImgDesc: {
      type: Sequelize.BOOLEAN,
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

module.exports = LessonPhoto
