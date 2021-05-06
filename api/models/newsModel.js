const Sequelize = require('sequelize')
const db = require('../config/database.js')

const News = db.define('news',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.TEXT
    },
    message: {
      type: Sequelize.TEXT
    },
    docType: {
      type: Sequelize.STRING
    },
    readTime: {
      type: Sequelize.DATE
    },
    language: {
      type: Sequelize.STRING
    },
    creator: {
      type: Sequelize.STRING
    },
    textDetail: {
      type: Sequelize.JSON
    },
    imageDetail: {
      type: Sequelize.JSON
    },
    videoDetail: {
      type: Sequelize.JSON
    },
    category: {
      type: Sequelize.STRING
    },
    _attachments: {
      type: Sequelize.STRING
    }
  },
  { timestamps: true }
)

module.exports = News
