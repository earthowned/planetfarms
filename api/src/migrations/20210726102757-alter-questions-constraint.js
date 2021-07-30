'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('questions', 'questions_question_key')
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('questions', {
      fields: ['question'],
      type: 'unique',
      name: 'questions_question_key'
    })
  }
}
