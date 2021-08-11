module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('lessons', 'lessonDesc', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('lessons', 'lessonDesc')
  }
}
