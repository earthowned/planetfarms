'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.addColumn('enterprises', 'communityId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'communities',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
    await queryInterface.addColumn('enterprises', 'slug', {
        type: Sequelize.STRING,
        allowNull: false,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('enterprises', 'communityId');
    await queryInterface.removeColumn('enterprises', 'slug');
  }
};
