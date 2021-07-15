'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []
    const date = new Date()
    data.push({
      name: 'PlanetFarms',
      description: 'Default community',
      category: 'Farms',
      slug: 'planetfarms',
      auto_follow: true,
      createdAt: date,
      updatedAt: date
    })
    return queryInterface.bulkInsert('communities', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('communities', null, {})
  }
}
