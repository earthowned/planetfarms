module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('videos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lessonId: {
        type: Sequelize.INTEGER
      },
      videoTitle: {
        type: Sequelize.STRING
      },
      videoDescription: {
        type: Sequelize.STRING
      },
      videoCover: {
        type: Sequelize.STRING
      },
      videoLink: {
        type: Sequelize.STRING
      },
      videoResource: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
    await queryInterface.addConstraint('videos', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forVidoes',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('videos', {})
  }
}
