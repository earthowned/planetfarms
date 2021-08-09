module.exports = {
  up: async (queryInterface, Sequelize) => {
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
  },

  down: async (queryInterface, Sequelize) => {
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
  }
}
