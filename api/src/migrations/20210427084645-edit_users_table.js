module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'email', Sequelize.STRING)
    queryInterface.addColumn('users', 'name', Sequelize.STRING)
    queryInterface.addColumn('users', 'email', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'name', Sequelize.STRING)
    queryInterface.removeColumn('users', 'email', Sequelize.STRING)
  }
}
