'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('courses', 'isFree', {
     type: Sequelize.BOOLEAN,
     defaultValue: false
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('courses', 'isFree')
  }
};
