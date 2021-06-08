'use strict';
const faker = require('faker');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = [];
   let amount = 10;
   let date = new Date();
   while(amount--) {
      data.push({
        name: faker.name.title(),
        description: faker.lorem.sentence(),
        attachment: faker.system.commonFileName(),
        creatorId: amount,
        createdAt: date,
        updatedAt: date,
      });
    }
    return queryInterface.bulkInsert('communities', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('communities', null, {});
  }
};
