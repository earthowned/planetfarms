module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('groups', {
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
      category: {
        type: Sequelize.STRING
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
    queryInterface.dropTable('groups', {})
  }
}
