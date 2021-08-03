'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('news', 'videoTitle', Sequelize.STRING)
    queryInterface.addColumn('news', 'videoDescription', Sequelize.STRING)
    queryInterface.addColumn('news', 'videoCover', Sequelize.STRING)
    queryInterface.addColumn('news', 'videoLink', Sequelize.STRING)
    queryInterface.addColumn('news', 'videoResource', Sequelize.STRING) 
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('news', 'videoTitle')
    queryInterface.removeColumn('news', 'videoDescription')
    queryInterface.removeColumn('news', 'videoCover')
    queryInterface.removeColumn('news', 'videoLink')
    queryInterface.removeColumn('news', 'videoResource') 
  }
};
