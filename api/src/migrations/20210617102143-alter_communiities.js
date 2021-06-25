'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('communities', 'slug', {
        type: Sequelize.STRING,
        allowNull: false,
    })
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.removeColumn('communities', 'slug');
  }
};
