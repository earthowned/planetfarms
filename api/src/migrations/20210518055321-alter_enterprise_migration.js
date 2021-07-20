module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('enterprises', 'filename', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('enterprises', 'filename')
  }
}
