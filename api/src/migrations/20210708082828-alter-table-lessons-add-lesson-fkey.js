module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('lessons', 'courseId', Sequelize.INTEGER)
    await queryInterface.addConstraint('lessons', {
      fields: ['courseId'],
      type: 'foreign key',
      name: 'courseId_fkey_forLessons',
      references: {
        table: 'courses',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('lessons', {})
  }
}
