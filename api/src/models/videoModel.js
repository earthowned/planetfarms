const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Video = db.define(
  'videos',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    videoTitle: {
      type: Sequelize.STRING,
    },
    videoDescription: {
      type: Sequelize.STRING,
    },
    videoCover: {
      type: Sequelize.STRING,
    },
    videoLink: {
      type: Sequelize.STRING,
    },
    videoResource: {
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

module.exports = Video
