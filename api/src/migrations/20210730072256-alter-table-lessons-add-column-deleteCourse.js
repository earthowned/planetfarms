module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('lessons', 'courseId_fkey_forLesson')
    await queryInterface.addConstraint('lessons', {
      fields: ['courseId'],
      type: 'foreign key',
      name: 'courseId_fkey_forLessons',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('lessons', 'courseId_fkey_forLessons')
    await queryInterface.addConstraint('lessons', {
      fields: ['courseId'],
      type: 'foreign key',
      name: 'courseId_fkey_forLesson',
      references: {
        table: 'courses',
        field: 'id'
      }
    })
  }
}
