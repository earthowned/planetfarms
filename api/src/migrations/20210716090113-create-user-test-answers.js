'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_test_answers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      questionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "questions",
          key: 'id'
        }
      },
      userTestId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users_tests",
          key: 'id'
        }
      },
      answer: {
        type: Sequelize.TEXT,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_test_answers');
  }
};
