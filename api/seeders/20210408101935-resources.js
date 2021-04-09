
const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let amount = 50;

    while(amount--) {
      data.push({
        title: faker.name.title(),
        resourceFor: faker.lorem.word(),
        publisher: faker.name.firstName(),
        linkToLicense: faker.lorem.words(),
        uploadDate: faker.date.past(),
        addedBy: faker.name.firstName(),
        openWith: faker.system.commonFileType(),
        subject: faker.lorem.sentence(),
        articleDate: faker.date.past(),
        kind: faker.name.firstName(),
        language: faker.address.city(),
        author: faker.name.firstName(),
        sum: faker.finance.amount(),
        level: faker.name.jobTitle(),
        languages: faker.address.country(),
        timesRated: faker.name.firstName(),
        tag: '',
        year: faker.date.past(),
        averageRating: faker.finance.amount(),
        filename: faker.system.commonFileName(),
        mediaType: faker.system.commonFileType(),
        description: faker.lorem.paragraph(),
        tags: '',
        medium: faker.name.firstName(),
        isDownloadable: faker.datatype.boolean(),
        resourceType: faker.system.commonFileType(),
        openUrl: faker.internet.url(),
        createdDate: faker.date.past(),
        updatedDate: faker.date.past(),
        attachments: faker.lorem.sentence(),
      });
    }
    return queryInterface.bulkInsert('resources', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('resources', null, {});

  }
};
