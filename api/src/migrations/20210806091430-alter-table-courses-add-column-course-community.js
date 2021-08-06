'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('courses', 'communityId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'communities',
        key: 'id'
      }
    })
    await queryInterface.addColumn('courses', 'isPublic', Sequelize.BOOLEAN)
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('courses', 'communityId')
    await queryInterface.removeColumn('courses', 'isPublic')
  }
}
