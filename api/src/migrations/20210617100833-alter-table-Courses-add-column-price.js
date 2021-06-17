module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("courses", "price", Sequelize.DOUBLE);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("courses", "price", Sequelize.DOUBLE);
  },
};
