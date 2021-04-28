
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'name', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'name', Sequelize.STRING)
  }
}
