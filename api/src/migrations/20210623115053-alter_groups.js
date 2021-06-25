'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('groups', 'deleted', { 
      type: Sequelize.BOOLEAN,
      defaultValue: false
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('groups', 'deleted')
  }
};
