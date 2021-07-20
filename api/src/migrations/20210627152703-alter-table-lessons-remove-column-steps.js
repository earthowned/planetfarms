module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('lessons', 'steps')
    await queryInterface.removeColumn('lessons', 'courseId')
    await queryInterface.addColumn('lessons', 'courseId', Sequelize.INTEGER)
    await queryInterface.addConstraint('lessons', {
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
    await queryInterface.removeConstraint('lessons', 'courseId_fkey_forLesson')
    await queryInterface.removeColumn('lessons', 'courseId')
    await queryInterface.addColumn('lessons', 'courseId', Sequelize.STRING)
    await queryInterface.addColumn('lessons', 'steps', Sequelize.JSON)
  }
}
