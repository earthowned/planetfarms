module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('photos', 'lessonImg', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('photos', 'lessonImg')
  }
}
