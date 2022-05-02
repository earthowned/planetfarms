
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const data = []
    let amount = 10
    const date = new Date()

    const users = [] // for users table
    const userIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    userIDs.sort(() => (Math.random() > 0.5) ? 1 : -1)

    while (amount--) {
      users.push({
        userID: userIDs[amount],
        isLocalAuth: true,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        dateOfBirth: date,
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        lastLogin: date,
        numberOfVisit: Math.floor(Math.random() * 10),
        attachments: faker.image.avatar()
      })
    }

    // hard coded user id (cognito user)
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

    // hard coded user id (local user)
    // username: test@test.com
    // password: test1234
    users.push({
      userID: 21,
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
