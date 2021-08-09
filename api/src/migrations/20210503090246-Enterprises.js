module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enterprises', {
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
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enterprises', {})
  }
}
