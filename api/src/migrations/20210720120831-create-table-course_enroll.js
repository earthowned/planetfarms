'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enrolls', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      courseId: {
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isEnroll: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enrolls')
  }
}
