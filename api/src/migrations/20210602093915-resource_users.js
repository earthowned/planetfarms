
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('resource_users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        resourceId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'resources',
            key: 'id'
          }
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('resource_users', {})
  }
}
