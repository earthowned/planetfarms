module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('texts', 'textDescription')
    queryInterface.addColumn('texts', 'textDescription', Sequelize.TEXT)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('texts', 'textDescription')
    queryInterface.addColumn('texts', 'textDescription', Sequelize.STRING)
  }
}
