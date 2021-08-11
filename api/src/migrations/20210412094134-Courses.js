
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses',
      {
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
        languageOfInstruction: {
          type: Sequelize.STRING
        },
        memberLimit: {
          type: Sequelize.STRING
        },
        method: {
          type: Sequelize.STRING
        },
        gradeLevel: {
          type: Sequelize.STRING
        },
        subjectLevel: {
          type: Sequelize.STRING
        },
        creator: {
          type: Sequelize.STRING
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        steps: {
          type: Sequelize.JSON
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('courses', {})
  }
}
