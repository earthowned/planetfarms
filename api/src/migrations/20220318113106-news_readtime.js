'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("news", "readTime", {
      type: Sequelize.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("news", "readTime", {
      type: Sequelize.DATE
    })
  }
};
