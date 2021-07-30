'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'role', {
      type: Sequelize.STRING,
      defaultValue: 'user'
    })
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'role')
  }
}
