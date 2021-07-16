module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('lessons', 'lessonDesc', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('lessons', 'lessonDesc', Sequelize.STRING)
  }
}
