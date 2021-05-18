
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('enterprises', 'category', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('enterprises', 'category', Sequelize.STRING)
  }
}
