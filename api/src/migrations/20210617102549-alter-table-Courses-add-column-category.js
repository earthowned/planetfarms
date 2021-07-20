module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('courses', 'category', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('courses', 'category')
  }
}
