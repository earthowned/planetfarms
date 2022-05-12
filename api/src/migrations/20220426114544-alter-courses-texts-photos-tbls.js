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
    await queryInterface.removeConstraint('courses', 'categoryId_fkey_forCourses')
    await queryInterface.removeColumn('courses', 'categoryId')
    await queryInterface.renameColumn('photos', 'photoDescription', 'description')
    await queryInterface.renameColumn('photos', 'lessonImg', 'image')
    await queryInterface.renameColumn('texts', 'textHeading', 'heading')
    await queryInterface.renameColumn('texts', 'textDescription', 'description')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('texts', 'description', 'textDescription')
    await queryInterface.renameColumn('texts', 'heading', 'textHeading')
    await queryInterface.renameColumn('photos', 'image', 'lessonImg')
    await queryInterface.renameColumn('photos', 'description', 'photoDescription')
    await queryInterface.addColumn('courses', 'categoryId', Sequelize.INTEGER)
    await queryInterface.addConstraint('courses', {
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'categoryId_fkey_forCourses',
      references: {
        table: 'categories',
        field: 'id'
      }
    })
    await queryInterface.removeColumn('courses', 'richtextId')
    await queryInterface.removeColumn('courses', 'creatorId')
    await queryInterface.removeColumn('courses', 'isPublished')
    await queryInterface.addColumn('courses', 'creator', Sequelize.STRING)
  }
};
