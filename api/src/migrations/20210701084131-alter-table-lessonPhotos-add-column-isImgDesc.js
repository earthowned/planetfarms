module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('photos', 'isImgDesc', Sequelize.BOOLEAN)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('photos', 'isImgDesc')
  }
}
