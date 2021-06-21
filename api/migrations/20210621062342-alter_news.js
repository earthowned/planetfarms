'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('news', 'communityId', { 
      type: Sequelize.INTEGER,
      references: {
        model: 'communities',
        key: 'id'
        }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('news', 'communityId');
  }
};
