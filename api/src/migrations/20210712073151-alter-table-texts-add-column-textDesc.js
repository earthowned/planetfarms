module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("texts", "textDescription", Sequelize.STRING);
    queryInterface.addColumn("texts", "textDescription", Sequelize.TEXT);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("texts", "textDescription", Sequelize.STRING);
    queryInterface.removeColumn("texts", "textDescription", Sequelize.TEXT);
  },
};
