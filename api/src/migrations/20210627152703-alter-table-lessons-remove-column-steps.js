module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('lessons', 'steps')
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
    queryInterface.alterColumn('lessons', 'courseId', Sequelize.STRING)
  }
}
