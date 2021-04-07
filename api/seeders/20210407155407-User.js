'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let amount = 20;
    let date = new Date();

    while(amount--) {
      data.push({
        user: faker.name.findName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        created_at: date,
        updated_at: date,
      });
    }
    return queryInterface.bulkInsert('Users', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', null, {});
  }
};
