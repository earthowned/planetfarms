'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses', 'creator')
    await queryInterface.addColumn('courses', 'isPublished', Sequelize.BOOLEAN)
    await queryInterface.addColumn('courses', 'creatorId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      defaultValue: null
    })
    await queryInterface.addColumn('courses', 'richtextId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'rich_texts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses', 'richtextId')
    await queryInterface.removeColumn('courses', 'creatorId')
    await queryInterface.removeColumn('courses', 'isPublished')
    await queryInterface.addColumn('courses', 'creator', Sequelize.STRING)
  }
};
