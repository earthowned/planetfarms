
module.exports = {
  up: async (queryInterface, Sequelize) => {
    Promise.all([
      queryInterface.addColumn('Users', 'user', Sequelize.STRING),
      queryInterface.addColumn('Users', 'email', Sequelize.STRING),
      queryInterface.addColumn('Users', 'password', Sequelize.STRING),
      queryInterface.addColumn('Users', 'created_at', Sequelize.STRING),
      queryInterface.addColumn('Users', 'updated_at', Sequelize.STRING),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    Promise.all([
      queryInterface.removeColumn('Users', 'user'),
      queryInterface.removeColumn('Users', 'email'),
      queryInterface.removeColumn('Users', 'password'),
      queryInterface.removeColumn('Users', 'created_at'),
      queryInterface.removeColumn('Users', 'updated_at'),
    ]);
  }
};
