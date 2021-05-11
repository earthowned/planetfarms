module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'id', { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true })
    queryInterface.addColumn('users', 'firstName', Sequelize.STRING)
    queryInterface.addColumn('users', 'lastName', Sequelize.STRING)
    queryInterface.addColumn('users', 'phone', Sequelize.STRING)
    queryInterface.addColumn('users', 'dateOfBirth', Sequelize.DATE)
    queryInterface.addColumn('users', 'lastLogin', Sequelize.DATE)
    queryInterface.addColumn('users', 'numberOfVisit', Sequelize.INTEGER)
    queryInterface.addColumn('users', 'attachments', Sequelize.BLOB('long'))
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'id', Sequelize.INTEGER)
    queryInterface.removeColumn('users', 'firstName', Sequelize.STRING)
    queryInterface.removeColumn('users', 'lastName', Sequelize.STRING)
    queryInterface.removeColumn('users', 'phone', Sequelize.STRING)
    queryInterface.removeColumn('users', 'dateOfBirth', Sequelize.DATE)
    queryInterface.addColumn('users', 'lastLogin', Sequelize.DATE)
    queryInterface.removeColumn('users', 'numberOfVisit', Sequelize.INTEGER)
    queryInterface.removeColumn('users', 'attachments', Sequelize.BLOB('long'))
  }
}
