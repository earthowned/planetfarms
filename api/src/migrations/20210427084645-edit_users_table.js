module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'email')
    queryInterface.addColumn('users', 'name', Sequelize.STRING)
    queryInterface.addColumn('users', 'email', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'name')
    queryInterface.removeColumn('users', 'email')
  }
}
