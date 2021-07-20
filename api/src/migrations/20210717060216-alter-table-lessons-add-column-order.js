module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('lessons', 'order', Sequelize.INTEGER)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('lessons', 'order')
  }
}
