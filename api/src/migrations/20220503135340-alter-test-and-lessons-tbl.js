'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tests', 'test_name', 'title')
    await queryInterface.renameColumn('lessons', 'coverImg', 'thumbnail')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tests', 'title', 'test_name')
    await queryInterface.renameColumn('lessons', 'thumbnail', 'coverImg')
  }
};
