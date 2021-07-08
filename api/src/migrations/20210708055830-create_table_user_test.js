'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users_tests', { 
      id: {
       type: Sequelize.INTEGER ,
       autoIncrement: true,
       unique: true,
       primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      testId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tests',
          key: 'id'
        }
      },
      marks: {
        type: Sequelize.INTEGER
      },
      startTime: {
        type: Sequelize.STRING
      },
      endTime: {
        type: Sequelize.STRING
      },
      test_taken: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users_tests');
  }
};
