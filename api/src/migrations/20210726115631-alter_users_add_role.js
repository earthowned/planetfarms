'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'role', {
      type: Sequelize.STRING,
      defaultValue: 'user'
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'role')
  }
}
