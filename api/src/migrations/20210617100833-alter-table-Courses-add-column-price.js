module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('courses', 'price', Sequelize.DOUBLE)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('courses', 'price')
  }
}
