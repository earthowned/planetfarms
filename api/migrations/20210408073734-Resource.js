
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
          type: Sequelize.TEXT
        },
        resourceFor: {
          type: Sequelize.TEXT
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
          type: Sequelize.TEXT,
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
          type: Sequelize.STRING,
        },
        sum: {
          type: Sequelize.DOUBLE,
        },
        level: {
          type: Sequelize.TEXT,
        },
        languages: {
          type: Sequelize.TEXT,
        },
        timesRated: {
          type: Sequelize.STRING
        },
        tag: {
          type: Sequelize.TEXT,
        },
        year: {
          type: Sequelize.DATE,
        },
        averageRating: {
          type: Sequelize.DOUBLE,
        },
        filename: {
          type: Sequelize.STRING,
        },
        mediaType: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.TEXT,
        },
        tags: {
          type: Sequelize.STRING,
        },
        medium: {
          type: Sequelize.STRING,
        },
        isDownloadable: {
          type: Sequelize.BOOLEAN
        },
        resourceType: {
          type: Sequelize.STRING,
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
          type: Sequelize.TEXT,
        }
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('resources', {});
  }
};
