module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('courses', '_attachments', Sequelize.BLOB('long'))
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn(
      'courses',
      '_attachments',
      Sequelize.BLOB('long')
    )
  }
}
