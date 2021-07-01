module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('lessonPhotos', 'lessonImg', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('lessonPhotos', 'lessonImg', Sequelize.STRING)
  },
}
