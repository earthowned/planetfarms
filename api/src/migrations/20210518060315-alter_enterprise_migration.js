module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('enterprises', 'category', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('enterprises', 'category', Sequelize.STRING)
  }
}
