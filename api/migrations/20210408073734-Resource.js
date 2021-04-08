
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('resources',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.JSON
        },
        resourceFor: {
          type: Sequelize.JSON
        },
        publisher: {
          type: Sequelize.STRING,
        },
        linkToLicense: {
          type: Sequelize.STRING,
        },
        uploadDate: {
          type: Sequelize.DATE,
        },
        addedBy: {
          type: Sequelize.STRING,
        },
        openWith: {
          type: Sequelize.STRING,
        },
        subject: {
          type: Sequelize.JSON,
        },
        articleDate: {
          type: Sequelize.DATE,
        },
        kind: {
          type: Sequelize.STRING,
        },
        language: {
          type: Sequelize.STRING,
        },
        author: {
          type: Sequelize.DATE,
        },
        sum: {
          type: Sequelize.INTEGER,
        },
        level: {
          type: Sequelize.JSON,
        },
        languages: {
          type: Sequelize.JSON,
        },
        timesRated: {
          type: Sequelize.STRING
        },
        tag: {
          type: Sequelize.JSON,
        },
        year: {
          type: Sequelize.DATE,
        },
        averageRating: {
          type: Sequelize.INTEGER,
        },
        filename: {
          type: Sequelize.STRING,
        },
        mediaType: {
          type: Sequelize.DATE,
        },
        description: {
          type: Sequelize.TEXT,
        },
        sendOnAccept: {
          type: Sequelize.INTEGER,
        },
        tags: {
          type: Sequelize.STRING,
        },
        medium: {
          type: Sequelize.DATE,
        },
        isDownloadable: {
          type: Sequelize.BOOLEAN
        },
        resourceType: {
          type: Sequelize.DATE,
        },
        openUrl: {
          type: Sequelize.STRING,
        },
        createdDate: {
          type: Sequelize.DATE,
        },
        updatedDate: {
          type: Sequelize.DATE,
        },
        attachments: {
          type: Sequelize.JSON,
        }
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('resources', {});
  }
};
