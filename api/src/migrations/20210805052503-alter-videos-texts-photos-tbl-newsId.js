'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('photos', 'newsId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'news',
        key: 'id'
      }
    })
    await queryInterface.addColumn('videos', 'newsId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'news',
        key: 'id'
      }
    })
    await queryInterface.addColumn('texts', 'newsId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'news',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('photos', 'newsId')
    await queryInterface.removeColumn('videos', 'newsId')
    await queryInterface.removeColumn('texts', 'newsId')
  }
}
