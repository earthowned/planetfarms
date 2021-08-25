'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('lesson_progresses', 'userId')
    await queryInterface.addColumn('lesson_progresses', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('lesson_progresses', 'userId')
    await queryInterface.addColumn('lesson_progresses', 'userId', {
      type: Sequelize.STRING,
      allowNull: false
    })
  }
}
