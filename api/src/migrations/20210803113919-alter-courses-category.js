module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('courses', 'category')
    await queryInterface.removeColumn('courses', 'languageOfInstruction')
    await queryInterface.removeColumn('courses', 'memberLimit')
    await queryInterface.removeColumn('courses', 'method')
    await queryInterface.removeColumn('courses', 'gradeLevel')
    await queryInterface.removeColumn('courses', 'subjectLevel')
    await queryInterface.removeColumn('courses', 'steps')
    await queryInterface.addColumn('courses', 'categoryId', Sequelize.INTEGER)
    await queryInterface.addConstraint('courses', {
      fields: ['categoryId'],
      type: 'foreign key',
      name: 'categoryId_fkey_forCourses',
      references: {
        table: 'categories',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('courses', 'categoryId_fkey_forCourses')
    await queryInterface.removeColumn('courses', 'categoryId')
    await queryInterface.addColumn('courses', 'category', Sequelize.STRING)
    await queryInterface.addColumn('courses', 'languageOfInstruction', Sequelize.STRING)
    await queryInterface.addColumn('courses', 'memberLimit', Sequelize.STRING)
    await queryInterface.addColumn('courses', 'method', Sequelize.STRING)
    await queryInterface.addColumn('courses', 'gradeLevel', Sequelize.STRING)
    await queryInterface.addColumn('courses', 'subjectLevel', Sequelize.STRING)
    await queryInterface.addColumn('courses', 'steps', Sequelize.JSON)
  }
}
