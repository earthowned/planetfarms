//todo relation mapping between collection and resources
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("collections",
     {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.TEXT,
      },
      docType: {
        type: Sequelize.TEXT,
      },
      resourceType: {
        type: TEXT,
      },
      linkId: {
        type: Sequelize.INTEGER,
      }
    })
   
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("courses", {})
  }
};
