module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('lessons', 'steps')
    queryInterface.removeColumn('lessons', 'courseId')
    queryInterface.addColumn('lessons', 'courseId', Sequelize.INTEGER)
    queryInterface.addConstraint('lessons', {
      fields: ['courseId'],
      type: 'foreign key',
      name: 'courseId_fkey_forLesson',
      references: {
        table: 'courses',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('lessons', 'steps', Sequelize.JSON)
    queryInterface.removeConstraint('lessons', 'courseId_fkey_forLesson')
    queryInterface.removeColumn('lessons', 'courseId')
    queryInterface.addColumn('lessons', 'courseId', Sequelize.STRING)
  }
}
