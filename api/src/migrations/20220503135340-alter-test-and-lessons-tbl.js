'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tests', 'test_name', 'title')
    await queryInterface.renameColumn('lessons', 'coverImg', 'thumbnail')
    await queryInterface.removeConstraint('lessons', 'lessons_richtextId_fkey')
    await queryInterface.changeColumn('lessons', 'richtextId', {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: true
    })
    await queryInterface.addConstraint('lessons', {
      type: 'foreign key',
      fields: ['richtextId'],
      name: 'lessons_richtextId_fkey',
      references: {
        table: 'rich_texts',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('tests', 'title', 'test_name')
    await queryInterface.renameColumn('lessons', 'thumbnail', 'coverImg')
    await queryInterface.changeColumn('lessons', 'richtextId', {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false
    })
    await queryInterface.removeConstraint('lessons', 'lessons_richtextId_fkey')
    await queryInterface.addConstraint('lessons', {
      type: 'foreign key',
      fields: ['richtextId'],
      name: 'lessons_richtextId_fkey',
      references: {
        table: 'rich_texts',
        field: 'id',
      },
      allowNull: false
    })
  }
};
