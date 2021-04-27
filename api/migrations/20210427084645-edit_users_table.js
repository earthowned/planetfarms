
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'name', Sequelize.STRING)
    queryInterface.addColumn('users', 'email', Sequelize.STRING)

  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'email', Sequelize.STRING)
  }
}
