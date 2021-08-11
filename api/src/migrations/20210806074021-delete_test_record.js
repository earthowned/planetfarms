'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('users_tests', 'users_tests_userId_fkey')
    await queryInterface.addConstraint('users_tests', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'users_tests_userId_fkey',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade'
    })
    await queryInterface.removeConstraint('users_tests', 'users_tests_testId_fkey')
    await queryInterface.addConstraint('users_tests', {
      fields: ['testId'],
      type: 'foreign key',
      name: 'users_tests_testId_fkey',
      references: {
        table: 'tests',
        field: 'id'
      },
      onDelete: 'cascade'
    })
    await queryInterface.removeConstraint('user_test_answers', 'user_test_answers_userTestId_fkey')
    await queryInterface.addConstraint('user_test_answers', {
      fields: ['userTestId'],
      type: 'foreign key',
      name: 'user_test_answers_userTestId_fkey',
      references: {
        table: 'users_tests',
        field: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('users_tests', 'users_tests_userId_fkey')
    await queryInterface.addConstraint('users_tests', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'users_tests_userId_fkey',
      references: {
        table: 'users',
        field: 'id'
      }
    })
    await queryInterface.removeConstraint('users_tests', 'users_tests_testId_fkey')
    await queryInterface.addConstraint('users_tests', {
      fields: ['testId'],
      type: 'foreign key',
      name: 'users_tests_testId_fkey',
      references: {
        table: 'tests',
        field: 'id'
      }
    })
    await queryInterface.removeConstraint('user_test_answers', 'user_test_answers_userTestId_fkey')
    await queryInterface.addConstraint('user_test_answers', {
      fields: ['userTestId'],
      type: 'foreign key',
      name: 'user_test_answers_userTestId_fkey',
      references: {
        table: 'users_tests',
        field: 'id'
      }
    })
  }
}
