
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let amount = 10;
    let date = new Date();

    while(amount--) {
      data.push({
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: date,
        updatedAt: date,
      });
    }
    return queryInterface.bulkInsert('users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', null, {});
  }
};
