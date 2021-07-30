module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('lessons', 'courseId_fkey_forLessons')
    queryInterface.addConstraint('lessons', {
      fields: ['courseId'],
      type: 'foreign key',
      name: 'courseId_fkey_forLesson',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('lessons', {
      fields: ['courseId'],
      type: 'foreign key',
      name: 'courseId_fkey_forLessons',
      references: {
        table: 'courses',
        field: 'id'
      }
    })
    queryInterface.removeConstraint('lessons', 'courseId_fkey_forLesson')
  }
}
