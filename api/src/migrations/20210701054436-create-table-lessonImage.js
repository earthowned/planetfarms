module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lessonPhotos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lessonId: {
        type: Sequelize.INTEGER,
      },
      photoDescription: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    })
    await queryInterface.addConstraint('lessonPhotos', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forlessonPhotos',
      references: {
        table: 'lessons',
        field: 'id',
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('lessonPhotos', {})
  },
}
