module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('lessonPhotos', 'isImgDesc', Sequelize.BOOLEAN)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('lessonPhotos', 'isImgDesc', Sequelize.BOOLEAN)
  },
}
