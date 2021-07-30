'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lesson_progesss', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lessonId: {
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: 'lessons',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isCompleted: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('lesson_progesss')
  }
}
