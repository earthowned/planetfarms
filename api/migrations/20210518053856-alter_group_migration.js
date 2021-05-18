
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('groups', 'attachments', Sequelize.STRING)
    queryInterface.addColumn('groups', 'filename', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('groups', 'attachments', Sequelize.STRING)
  }
}
