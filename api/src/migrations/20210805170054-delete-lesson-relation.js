'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('texts', 'lessonId_fkey_fortexts')
    await queryInterface.addConstraint('texts', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_fortexts',
      references: {
        table: 'lessons',
        field: 'id'
      },
      onDelete: 'cascade'
    })
    await queryInterface.removeConstraint('videos', 'lessonId_fkey_forVidoes')
    await queryInterface.addConstraint('videos', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forVidoes',
      references: {
        table: 'lessons',
        field: 'id'
      },
      onDelete: 'cascade'
    })
    await queryInterface.removeConstraint('photos', 'lessonId_fkey_forphotos')
    await queryInterface.addConstraint('photos', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forphotos',
      references: {
        table: 'lessons',
        field: 'id'
      },
      onDelete: 'cascade'
    })
    await queryInterface.removeConstraint('materials', 'lessonId_fkey_forMaterials')
    await queryInterface.addConstraint('materials', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forMaterials',
      references: {
        table: 'lessons',
        field: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('texts', 'lessonId_fkey_fortexts')
    await queryInterface.addConstraint('texts', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_fortexts',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
    await queryInterface.removeConstraint('videos', 'lessonId_fkey_forVidoes')
    await queryInterface.addConstraint('videos', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forVidoes',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
    await queryInterface.removeConstraint('photos', 'lessonId_fkey_forphotos')
    await queryInterface.addConstraint('photos', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forphotos',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
    await queryInterface.removeConstraint('materials', 'lessonId_fkey_forMaterials')
    await queryInterface.addConstraint('materials', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forMaterials',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
  }
}
