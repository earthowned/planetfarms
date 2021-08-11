'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('tests', 'tests_lessonId_fkey')
    await queryInterface.addConstraint('tests', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'tests_lessonId_fkey',
      references: {
        table: 'lessons',
        field: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('tests', 'tests_lessonId_fkey')
    await queryInterface.addConstraint('tests', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'tests_lessonId_fkey',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
  }
}
