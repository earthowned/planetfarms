module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("courses", "isFree", Sequelize.BOOLEAN);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("courses", "isFree", Sequelize.BOOLEAN);
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("courses", "category", Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("courses", "category", Sequelize.STRING);
  },
};
