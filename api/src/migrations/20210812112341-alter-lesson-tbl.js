'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('lessons', 'richtextId', {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.removeColumn('lessons', 'richtextId')
  }
};
