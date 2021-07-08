module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('texts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lessonId: {
        type: Sequelize.INTEGER
      },
      textHeading: {
        type: Sequelize.STRING
      },
      textDescription: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
    await queryInterface.addConstraint('texts', {
      fields: ['lessonId'],
      type: 'foreign key',
      name: 'lessonId_fkey_fortexts',
      references: {
        table: 'lessons',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('texts', {})
  }
}
