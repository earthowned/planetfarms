'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex('questions', ['question'], {
      indexName: 'questions_question_key',
      indicesType: 'UNIQUE'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex('questions', ['question'], {
      indexName: 'questions_question_key',
      indicesType: 'UNIQUE'
    })
  }
}
