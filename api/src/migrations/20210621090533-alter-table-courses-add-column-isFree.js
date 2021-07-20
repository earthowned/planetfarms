module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('courses', 'isFree', Sequelize.BOOLEAN)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('courses', 'isFree')
  }
}
