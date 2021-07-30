module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('enrolls', 'enrolls_courseId_fkey')
    queryInterface.addConstraint('enrolls', {
      fields: ['courseId'],
      type: 'foreign key',
      name: 'enrolls_courseId_fkey',
      references: {
        table: 'courses',
        field: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addConstraint('enrolls', 'enrolls_courseId_fkey')
    queryInterface.removeConstraint('enrolls', {
      fields: ['courseId'],
      type: 'foreign key',
      name: 'enrolls_courseId_fkey',
      references: {
        table: 'courses',
        field: 'id'
      }
    })
  }
}
