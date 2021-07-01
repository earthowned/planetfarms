
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let amount = 20
    const date = new Date()

    const profiledata = [] // for userProfiles table
    const userIDs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    userIDs.sort(() => (Math.random() > 0.5) ? 1 : -1)

    while (amount--) {
      // for userProfiles table
      profiledata.push({
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
    queryInterface.bulkInsert('users', profiledata, {})
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('users', null, {})
  }
}
