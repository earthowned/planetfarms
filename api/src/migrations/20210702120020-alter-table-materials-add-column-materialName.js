module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('materials', 'name', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('materials', 'name')
  }
}
