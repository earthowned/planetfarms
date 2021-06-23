
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
          type: Sequelize.INTEGER
        },
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        },
        phone: {
          type: Sequelize.TEXT
        },
        email: {
          type: Sequelize.TEXT
        },
        dateOfBirth: {
          type: Sequelize.DATE
        },
        lastLogin: {
          type: Sequelize.DATE
        },
        numberOfVisit: {
          type: Sequelize.INTEGER
        },
        attachments: {
          type: Sequelize.TEXT
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('users', {})
    queryInterface.dropTable('userProfiles', {})
  }
}
