'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('resources', 'createdAt', Sequelize.DATE)
    await queryInterface.addColumn('resources', 'updatedAt', Sequelize.DATE)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('resources', 'createdAt', Sequelize.DATE)
    await queryInterface.removeColumn('resources', 'updatedAt', Sequelize.DATE)
  }
}
