'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     queryInterface.addColumn('communities_users', 'role', {
      type: Sequelize.STRING,
      defaultValue: 'member'
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('communities_users', 'role')
  }
};
