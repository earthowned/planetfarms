'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('groups', 'communityId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'communities',
        key: 'id'
      }
    })
    await queryInterface.addColumn('groups', 'slug', {
      type: Sequelize.STRING,
      allowNull: false
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('groups', 'communityId')
    await queryInterface.removeColumn('groups', 'slug')
  }
}
