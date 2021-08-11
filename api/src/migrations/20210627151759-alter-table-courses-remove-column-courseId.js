module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.removeColumn('courses', 'courseId')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('courses', 'courseId', Sequelize.STRING)
  }
}
