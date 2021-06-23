
module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        }
      }
    )
    queryInterface.createTable('userProfiles',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userID: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users', {})
    queryInterface.dropTable('userProfiles', {})
  }
}
