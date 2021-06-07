
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('collections', 'filename', Sequelize.STRING)
    queryInterface.addColumn('collections', 'description', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('collections', 'filename', Sequelize.STRING)
    queryInterface.addColumn('collections', 'description', Sequelize.STRING)
  }
}
