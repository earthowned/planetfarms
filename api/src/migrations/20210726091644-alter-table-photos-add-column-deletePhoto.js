module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('photos', 'lessonId_fkey_forphotos')
    queryInterface.addConstraint('photos', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forphotos',
      references: {
        table: 'lessons',
        field: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('photos', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forphotos',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
    queryInterface.removeConstraint('photos', 'lessonId_fkey_forphotos')
  }
}
