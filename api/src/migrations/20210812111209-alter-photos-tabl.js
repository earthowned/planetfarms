'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('photos', 'newsId')
    await queryInterface.removeColumn('photos', 'lessonId')
    await queryInterface.addColumn('photos', 'richtextId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'rich_texts',
        key: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('photos', 'newsId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'news',
        key: 'id'
      }
    })
    await queryInterface.addColumn('photos', 'lessonId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'lessons',
        key: 'id'
      }
    })
    await queryInterface.removeColumn('photos', 'richtextId')
  }
}
