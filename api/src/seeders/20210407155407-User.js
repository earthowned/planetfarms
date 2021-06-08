
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []
    let amount = 10
    const date = new Date()

    while (amount--) {
      data.push({
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: date,
        updatedAt: date
      })
    }
    return queryInterface.bulkInsert('users', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', null, {})
  }
}
