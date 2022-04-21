
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date()

    const users = []

    // hard coded user id
    // username: planetfarm-user
    // password: test1234
    users.push({
      userID: 'd99b3873-e9df-4cbb-a63b-ac125c812702',
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dateOfBirth: date,
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      lastLogin: date,
      numberOfVisit: Math.floor(Math.random() * 10),
      attachments: faker.image.avatar()
    })

    queryInterface.bulkInsert('users', users, {})
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('users', null, {})
  }
}
