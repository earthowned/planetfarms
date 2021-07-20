module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('lessons', 'title', Sequelize.STRING)
    await queryInterface.addColumn('lessons', 'coverImg', Sequelize.STRING)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('lessons', 'title')
    await queryInterface.removeColumn('lessons', 'coverImg')
  }
}
