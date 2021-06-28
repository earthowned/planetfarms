module.exports = {
  up: async (queryInterface, _Sequelize) => {
    queryInterface.removeColumn('lessons', 'lessonId')
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('lessons', 'lessonId', Sequelize.STRING)
  },
}
