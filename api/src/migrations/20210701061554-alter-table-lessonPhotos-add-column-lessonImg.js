module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('photos', 'lessonImg', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('photos', 'lessonImg')
  }
}
