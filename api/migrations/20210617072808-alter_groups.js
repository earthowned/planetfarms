'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('groups', 'communityId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'communities',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('groups', 'communityId');
  }
};
