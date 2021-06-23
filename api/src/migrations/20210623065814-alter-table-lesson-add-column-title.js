module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("lessons", "title", Sequelize.STRING);
    queryInterface.addColumn("lessons", "coverImg", Sequelize.STRING);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("lessons", "title", Sequelize.STRING);
    queryInterface.addColumn("lessons", "coverImg", Sequelize.STRING);
  },
};
