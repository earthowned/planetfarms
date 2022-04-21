module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'isLocalAuth')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'isLocalAuth', Sequelize.BOOLEAN)
  }
}
