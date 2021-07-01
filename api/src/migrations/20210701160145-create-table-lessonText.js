module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('lessonTexts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lessonId: {
        type: Sequelize.INTEGER,
      },
      textHeading: {
        type: Sequelize.STRING,
      },
      textDescription: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    })
    await queryInterface.addConstraint('lessonTexts', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_forlessonTexts',
      references: {
        table: 'lessons',
        field: 'id',
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('lessonTexts', {})
  },
}
