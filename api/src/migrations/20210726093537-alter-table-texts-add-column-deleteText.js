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
  }
}
