module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('videos', 'lessonId_fkey_forVidoes')
    queryInterface.addConstraint('videos', {
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
    queryInterface.addConstraint('videos', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forVidoes',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
    queryInterface.removeConstraint('videos', 'lessonId_fkey_forVidoes')
  }
}
