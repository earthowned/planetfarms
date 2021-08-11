module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('enterprises', 'filename', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('enterprises', 'filename')
  }
}
