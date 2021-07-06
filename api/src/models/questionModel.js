const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Question = db.define(
  'questions',
  {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      answer: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      options: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
      },
    testId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
        }
  },
  { timestamps: true }
)

module.exports = Question