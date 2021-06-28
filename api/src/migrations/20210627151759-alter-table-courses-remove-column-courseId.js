module.exports = {
  up: async (queryInterface, _Sequelize) => {
    queryInterface.removeColumn('courses', 'courseId')
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('courses', 'courseId', Sequelize.STRING)
  },
}
