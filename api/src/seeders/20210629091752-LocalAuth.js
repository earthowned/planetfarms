const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []
    let amount = 20
    const date = new Date()

    while (amount--) {
      data.push({
        username: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: date,
        updatedAt: date
      })
    }
    queryInterface.bulkInsert('localauths', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('localauths', null, {})
  }
}
