'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('resources', 'resourceFor')
    await queryInterface.removeColumn('resources', 'publisher')
    await queryInterface.removeColumn('resources', 'linkToLicense')
    await queryInterface.removeColumn('resources', 'uploadDate')
    await queryInterface.removeColumn('resources', 'addedBy')
    await queryInterface.removeColumn('resources', 'openWith')
    await queryInterface.removeColumn('resources', 'subject')
    await queryInterface.removeColumn('resources', 'articleDate')
    await queryInterface.removeColumn('resources', 'kind')
    await queryInterface.removeColumn('resources', 'language')
    await queryInterface.removeColumn('resources', 'author')
    await queryInterface.removeColumn('resources', 'sum')
    await queryInterface.removeColumn('resources', 'level')
    await queryInterface.removeColumn('resources', 'languages')
    await queryInterface.removeColumn('resources', 'timesRated')
    await queryInterface.removeColumn('resources', 'tag')
    await queryInterface.removeColumn('resources', 'year')
    await queryInterface.removeColumn('resources', 'averageRating')
    await queryInterface.removeColumn('resources', 'mediaType')
    await queryInterface.removeColumn('resources', 'tags')
    await queryInterface.removeColumn('resources', 'medium')
    await queryInterface.removeColumn('resources', 'isDownloadable')
    await queryInterface.removeColumn('resources', 'openUrl')
    await queryInterface.removeColumn('resources', 'attachments')
    await queryInterface.renameColumn('resources', 'createdDate', 'createdAt')
    await queryInterface.renameColumn('resources', 'updatedDate', 'updatedAt')
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('resources', 'resourceFor', {
      type: Sequelize.TEXT
    })
    await queryInterface.addColumn('resources', 'publisher', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'linkToLicense', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'uploadDate', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('resources', 'addedBy', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'openWith', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'subject', {
      type: Sequelize.TEXT
    })
    await queryInterface.addColumn('resources', 'articleDate', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('resources', 'kind', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'language', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'author', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'sum', {
      type: Sequelize.DOUBLE
    })
    await queryInterface.addColumn('resources', 'level', {
      type: Sequelize.TEXT
    })
    await queryInterface.addColumn('resources', 'languages', {
      type: Sequelize.TEXT
    })
    await queryInterface.addColumn('resources', 'timesRated', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'tag', { type: Sequelize.TEXT })
    await queryInterface.addColumn('resources', 'year', {
      type: Sequelize.DATE
    })
    await queryInterface.addColumn('resources', 'averageRating', {
      type: Sequelize.DOUBLE
    })
    await queryInterface.addColumn('resources', 'mediaType', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'tags', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'medium', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'isDownloadable', {
      type: Sequelize.BOOLEAN
    })
    await queryInterface.addColumn('resources', 'openUrl', {
      type: Sequelize.STRING
    })
    await queryInterface.addColumn('resources', 'attachments', {
      type: Sequelize.TEXT
    })
    await queryInterface.renameColumn('resources', 'createdAt', 'createdDate')
    await queryInterface.renameColumn('resources', 'updatedAt', 'updatedDate')
  }
}
