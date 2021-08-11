'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('questions', 'questions_testId_fkey')
    await queryInterface.addConstraint('questions', {
      fields: ['testId'],
      type: 'foreign key',
      name: 'questions_testId_fkey',
      references: {
        table: 'tests',
        field: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('questions', 'questions_testId_fkey')
    await queryInterface.addConstraint('questions', {
      fields: ['testId'],
      type: 'foreign key',
      name: 'questions_testId_fkey',
      references: {
        table: 'tests',
        field: 'id'
      }
    })
  }
}
