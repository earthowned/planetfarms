module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('userProfiles', 'firstName', Sequelize.STRING)
    queryInterface.addColumn('userProfiles', 'lastName', Sequelize.STRING)
    queryInterface.addColumn('userProfiles', 'phone', Sequelize.STRING)
    queryInterface.addColumn('userProfiles', 'dateOfBirth', Sequelize.DATE)
    queryInterface.addColumn('userProfiles', 'lastLogin', Sequelize.DATE)
    queryInterface.addColumn('userProfiles', 'numberOfVisit', Sequelize.INTEGER)
    queryInterface.addColumn('userProfiles', 'attachments', Sequelize.BLOB('long'))
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('userProfiles', 'firstName', Sequelize.STRING)
    queryInterface.removeColumn('userProfiles', 'lastName', Sequelize.STRING)
    queryInterface.removeColumn('userProfiles', 'phone', Sequelize.STRING)
    queryInterface.removeColumn('userProfiles', 'dateOfBirth', Sequelize.DATE)
    queryInterface.addColumn('userProfiles', 'lastLogin', Sequelize.DATE)
    queryInterface.removeColumn('userProfiles', 'numberOfVisit', Sequelize.INTEGER)
    queryInterface.removeColumn('userProfiles', 'attachments', Sequelize.BLOB('long'))
  }
}
