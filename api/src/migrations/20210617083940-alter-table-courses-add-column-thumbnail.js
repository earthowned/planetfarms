module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('courses', 'thumbnail', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('courses', 'thumbnail')
  }
}
