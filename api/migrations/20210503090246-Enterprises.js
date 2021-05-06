module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('enterprises', {
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
      roles: {
        type: Sequelize.ENUM,
        values: [
          'Leaders',
          'Farmer',
          'Marketers/Sales',
          'Mentors',
          'Accountng'
        ],
        defaultValue: 'Farmer'
      },
      attachments: {
        type: Sequelize.BLOB('long')
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
    queryInterface.dropTable('enterprises', {})
  }
}
