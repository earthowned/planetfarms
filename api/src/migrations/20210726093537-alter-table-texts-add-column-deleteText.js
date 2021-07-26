module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('texts', 'lessonId_fkey_fortexts')
    queryInterface.addConstraint('texts', {
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
    queryInterface.addConstraint('texts', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_fortexts',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
    queryInterface.removeConstraint('texts', 'lessonId_fkey_fortexts')
  }
}
