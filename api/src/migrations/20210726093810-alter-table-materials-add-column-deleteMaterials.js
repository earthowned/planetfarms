module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('materials', 'lessonId_fkey_forMaterials')
    queryInterface.addConstraint('materials', {
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
    queryInterface.addConstraint('materials', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forMaterials',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
    queryInterface.removeConstraint('materials', 'lessonId_fkey_forMaterials')
  }
}
