module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'email')
    await queryInterface.addColumn('users', 'name', Sequelize.STRING)
    await queryInterface.addColumn('users', 'email', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'name')
    await queryInterface.removeColumn('users', 'email')
  }
}
