
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('collections', 'status', {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('collections')
  }
}
