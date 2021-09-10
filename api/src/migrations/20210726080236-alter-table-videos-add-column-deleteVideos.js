module.exports = {
  up: async (queryInterface, Sequelize) => {
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
  },

  down: async (queryInterface, Sequelize) => {
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
  }
}
