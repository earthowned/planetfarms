module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('photos', 'isImgDesc', Sequelize.BOOLEAN)
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('photos', 'isImgDesc', Sequelize.BOOLEAN)
  },
}
