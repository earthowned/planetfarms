'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users_tests', 'total_marks', {
      type: Sequelize.INTEGER
    })
    await queryInterface.addColumn('users_tests', 'is_passed', {
      type: Sequelize.BOOLEAN
    })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('users_tests', 'total_marks')
    await queryInterface.removeColumn('users_tests', 'is_passed')
  }
};
