
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('enterprises', 'attachments', Sequelize.BLOB('long'))
    queryInterface.addColumn('enterprises', 'filename', Sequelize.STRING)
    queryInterface.addColumn('enterprises', 'category', Sequelize.ENUM)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('enterprises', 'attachments', Sequelize.STRING)
  }
}
