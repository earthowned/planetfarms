module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('lessons', 'lessonId')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('lessons', 'lessonId', Sequelize.STRING)
  }
}
