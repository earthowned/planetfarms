
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('calendars', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      startDate: {
        type: Sequelize.DATE
      },
      startTime: {
        type: Sequelize.TIME
      },
      endDate: {
        type: Sequelize.DATE
      },
      endTime: {
        type: Sequelize.TIME
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('calendars', {})
  }
}
