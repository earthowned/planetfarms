module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('groups', 'attachments')
    queryInterface.addColumn('groups', 'filename', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('groups', 'attachments', Sequelize.STRING)
    queryInterface.removeColumn('groups', 'filename')
  }
}
