'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('courses', 'creator')
    await queryInterface.addColumn('courses', 'isPublished', Sequelize.BOOLEAN)
    await queryInterface.addColumn('courses', 'creatorId', Sequelize.INTEGER)
    await queryInterface.addConstraint('courses', {
      type: 'foreign key',
      name: 'user_id_fk',
      fields: ['creatorId'],
      references: {
        table: 'users',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      defaultValue: null
    })
    await queryInterface.addColumn('courses', 'richtextId', Sequelize.INTEGER)
    await queryInterface.addConstraint('courses', {
      type: 'foreign key',
      name: 'rich_text_id_fk',
      fields: ['richtextId'],
      references: {
        table: 'rich_texts',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'null',
      defaultValue: null
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('courses', 'rich_text_id_fk')
    await queryInterface.removeColumn('courses', 'richtextId')
    await queryInterface.removeConstraint('courses', 'user_id_fk')
    await queryInterface.removeColumn('courses', 'creatorId')
    await queryInterface.removeColumn('courses', 'isPublished')
    await queryInterface.addColumn('courses', 'creator', Sequelize.STRING)
  }
};
