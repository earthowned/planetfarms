
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('enterprises', 'attachments', Sequelize.BLOB('long'))
    queryInterface.addColumn('enterprises', 'filename', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('enterprises', 'attachments', Sequelize.STRING)
  }
}
