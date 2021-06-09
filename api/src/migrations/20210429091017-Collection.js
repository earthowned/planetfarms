
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('collections',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.TEXT
        },
        docType: {
          type: Sequelize.TEXT
        },
        resourceType: {
          type: Sequelize.TEXT
        },
        linkId: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('collections', {});
  }
};
