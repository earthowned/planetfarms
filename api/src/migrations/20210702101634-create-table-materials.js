module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('materials', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lessonId: {
        type: Sequelize.INTEGER
      },
      material: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
    await queryInterface.addConstraint('materials', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forMaterials',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('materials', {})
  }
}
