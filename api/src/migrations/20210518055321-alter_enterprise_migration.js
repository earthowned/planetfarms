module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('enterprises', 'attachments')
    queryInterface.addColumn('enterprises', 'filename', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('enterprises', 'attachments', Sequelize.BLOB('long'))
    queryInterface.removeColumn('enterprises', 'filename')
  }
}
