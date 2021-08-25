'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('news', 'richtextId', {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('news', 'richtextId')
  }
};
