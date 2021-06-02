module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('collection_user',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userid: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        collection: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'collections',
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
    queryInterface.dropTable('collection_user', {})
  }
}
