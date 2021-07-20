module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'name')
    await queryInterface.removeColumn('users', 'password')
    await queryInterface.addColumn('users', 'userID', Sequelize.STRING)
    await queryInterface.addColumn('users', 'isLocalAuth', Sequelize.BOOLEAN)
    await queryInterface.addColumn('users', 'firstName', Sequelize.STRING)
    await queryInterface.addColumn('users', 'lastName', Sequelize.STRING)
    await queryInterface.addColumn('users', 'phone', Sequelize.TEXT)
    await queryInterface.addColumn('users', 'dateOfBirth', Sequelize.DATE)
    await queryInterface.addColumn('users', 'lastLogin', Sequelize.DATE)
    await queryInterface.addColumn('users', 'numberOfVisit', Sequelize.INTEGER)
    await queryInterface.addColumn('users', 'attachments', Sequelize.TEXT)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'name', Sequelize.STRING)
    await queryInterface.addColumn('users', 'password', Sequelize.STRING)
    await queryInterface.removeColumn('users', 'userID')
    await queryInterface.removeColumn('users', 'isLocalAuth')
    await queryInterface.removeColumn('users', 'firstName')
    await queryInterface.removeColumn('users', 'lastName')
    await queryInterface.removeColumn('users', 'phone')
    await queryInterface.removeColumn('users', 'dateOfBirth')
    await queryInterface.removeColumn('users', 'lastLogin')
    await queryInterface.removeColumn('users', 'numberOfVisit')
    await queryInterface.removeColumn('users', 'attachments')
  }
}
