module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('materials', 'lessonId_fkey_forMaterials')
    await queryInterface.addConstraint('materials', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forMaterials',
      references: {
        table: 'lessons',
        field: 'id'
      },
      onDelete: 'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('materials', 'lessonId_fkey_forMaterials')
    await queryInterface.addConstraint('materials', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forMaterials',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
  }
}
