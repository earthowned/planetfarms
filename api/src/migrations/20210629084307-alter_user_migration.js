module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'name')
    queryInterface.removeColumn('users', 'password')
    queryInterface.addColumn('users', 'userID', Sequelize.STRING)
    queryInterface.addColumn('users', 'isLocalAuth', Sequelize.BOOLEAN)
    queryInterface.addColumn('users', 'firstName', Sequelize.STRING)
    queryInterface.addColumn('users', 'lastName', Sequelize.STRING)
    queryInterface.addColumn('users', 'phone', Sequelize.TEXT)
    queryInterface.addColumn('users', 'dateOfBirth', Sequelize.DATE)
    queryInterface.addColumn('users', 'lastLogin', Sequelize.DATE)
    queryInterface.addColumn('users', 'numberOfVisit', Sequelize.INTEGER)
    queryInterface.addColumn('users', 'attachments', Sequelize.TEXT)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'name', Sequelize.STRING)
    queryInterface.addColumn('users', 'password', Sequelize.STRING)
    queryInterface.removeColumn('users', 'userID')
    queryInterface.removeColumn('users', 'isLocalAuth')
    queryInterface.removeColumn('users', 'firstName')
    queryInterface.removeColumn('users', 'lastName')
    queryInterface.removeColumn('users', 'phone')
    queryInterface.removeColumn('users', 'dateOfBirth')
    queryInterface.removeColumn('users', 'lastLogin')
    queryInterface.removeColumn('users', 'numberOfVisit')
    queryInterface.removeColumn('users', 'attachments')
  }
}
