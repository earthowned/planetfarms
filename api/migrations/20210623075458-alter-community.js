'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('communities', 'auto_follow', { 
      type: Sequelize.BOOLEAN,
      defaultValue: false
     });
     await queryInterface.addColumn('communities', 'deleted', { 
      type: Sequelize.BOOLEAN,
      defaultValue: false
     });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('communities', 'auto_follow')
   await queryInterface.removeColumn('communities', 'deleted')
  }
};
