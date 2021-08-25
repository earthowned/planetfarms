'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('texts', 'newsId')
    await queryInterface.removeColumn('texts', 'lessonId')
    await queryInterface.addColumn('texts', 'richtextId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'rich_texts',
        key: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('texts', 'newsId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'news',
        key: 'id'
      }
    })
    await queryInterface.addColumn('texts', 'lessonId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'lessons',
        key: 'id'
      }
    })
    await queryInterface.removeColumn('texts', 'richtextId')
  }
}
