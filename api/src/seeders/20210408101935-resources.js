const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []
    let amount = 10

    while (amount--) {
      data.push({
        title: faker.name.title(),
        filename: faker.system.commonFileName(),
        description: faker.lorem.paragraph(),
        resourceType: faker.system.commonFileType(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.past()
      })
    }
    return queryInterface.bulkInsert('resources', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('resources', null, {})
  }
}
