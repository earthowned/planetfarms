module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('enrolls', 'enrolls_courseId_fkey')
    await queryInterface.addConstraint('enrolls', {
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
    await queryInterface.removeConstraint('enrolls', 'enrolls_courseId_fkey')
    await queryInterface.addConstraint('enrolls', {
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
