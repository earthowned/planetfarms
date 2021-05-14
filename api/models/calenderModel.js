const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Calender = db.define(
  'calenders',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },
    startDate: {
      type: Sequelize.DATE
    },
    startTime: {
      type: Sequelize.TIME
    },
    endDate: {
      type: Sequelize.DATE
    },
    endTime: {
      type: Sequelize.TIME
    }
  },
  { timestamps: true }
)

module.exports = Calender
