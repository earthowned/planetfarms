
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('collections', 'category', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('collections', 'category', Sequelize.STRING)
  }
}
