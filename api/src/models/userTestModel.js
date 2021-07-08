const Sequelize = require('sequelize')
const db = require('../config/database.js')

const UserTest = db.define('users_tests', {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
    userId: Sequelize.INTEGER,
    testId: Sequelize.INTEGER,
    marks: Sequelize.INTEGER,
    startTime: Sequelize.STRING,
    endTime: Sequelize.STRING,
    test_taken: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, { timestamps: false })

module.exports = UserTest
