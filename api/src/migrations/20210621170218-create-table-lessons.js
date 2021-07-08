module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('lessons', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      courseId: {
        type: Sequelize.STRING
      },
      lessonId: {
        type: Sequelize.STRING
      },
      steps: {
        type: Sequelize.JSON
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
    queryInterface.dropTable('lessons', {})
  }
}
