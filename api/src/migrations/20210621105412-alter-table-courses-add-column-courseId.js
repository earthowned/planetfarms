module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('courses', 'courseId', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('courses', 'courseId', Sequelize.STRING)
  },
}
