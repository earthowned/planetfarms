'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('lesson_progresses', 'startTime', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('lesson_progresses', 'endTime', {
      type: Sequelize.STRING
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('lesson_progresses', 'startTime')
    await queryInterface.removeColumn('lesson_progresses', 'endTime')
  }
}
