module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('materials', 'name', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('materials', 'name')
  }
}
