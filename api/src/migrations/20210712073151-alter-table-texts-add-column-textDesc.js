module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('texts', 'textDescription')
    await queryInterface.addColumn('texts', 'textDescription', Sequelize.TEXT)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('texts', 'textDescription')
    await queryInterface.addColumn('texts', 'textDescription', Sequelize.STRING)
  }
}
