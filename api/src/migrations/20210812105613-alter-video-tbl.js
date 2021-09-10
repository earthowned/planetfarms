'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('videos', 'newsId')
    await queryInterface.removeColumn('videos', 'lessonId')
    await queryInterface.addColumn('videos', 'richtextId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'rich_texts',
        key: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('videos', 'newsId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'news',
        key: 'id'
      }
    })
    await queryInterface.addColumn('videos', 'lessonId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'lessons',
        key: 'id'
      }
    })
    await queryInterface.removeColumn('videos', 'richtextId')
  }
}
