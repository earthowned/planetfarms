module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'name', Sequelize.STRING)
    queryInterface.removeColumn('users', 'password', Sequelize.STRING)
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
    queryInterface.removeColumn('users', 'userID', Sequelize.STRING)
    queryInterface.removeColumn('users', 'isLocalAuth', Sequelize.BOOLEAN)
    queryInterface.removeColumn('users', 'firstName', Sequelize.STRING)
    queryInterface.removeColumn('users', 'lastName', Sequelize.STRING)
    queryInterface.removeColumn('users', 'phone', Sequelize.TEXT)
    queryInterface.removeColumn('users', 'dateOfBirth', Sequelize.DATE)
    queryInterface.removeColumn('users', 'lastLogin', Sequelize.DATE)
    queryInterface.removeColumn('users', 'numberOfVisit', Sequelize.INTEGER)
    queryInterface.removeColumn('users', 'attachments', Sequelize.TEXT)
  }
}
