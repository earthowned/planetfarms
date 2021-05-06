module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('news',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.TEXT
        },
        message: {
          type: Sequelize.TEXT
        },
        docType: {
          type: Sequelize.STRING
        },
        readTime: {
          type: Sequelize.DATE
        },
        creator: {
          type: Sequelize.STRING
        },
        language: {
          type: Sequelize.STRING
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        _attachments: {
          type: Sequelize.STRING
        },
        textDetail: {
          type: Sequelize.JSON
        },
        imageDetail: {
          type: Sequelize.JSON
        },
        videoDetail: {
          type: Sequelize.JSON
        },
        category: {
          type: Sequelize.STRING
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('news', {})
  }
}
