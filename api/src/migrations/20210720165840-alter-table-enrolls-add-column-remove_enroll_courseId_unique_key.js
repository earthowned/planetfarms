module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('enrolls', 'courseId', {
      type: Sequelize.INTEGER,
      unique: true,
      references: {
        model: 'courses',
        key: 'id'
      }
    })
    await queryInterface.addColumn('enrolls', 'courseId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'courses',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('enrolls', 'courseId', {
      type: Sequelize.INTEGER,
      unique: true,
      references: {
        model: 'courses',
        key: 'id'
      }
    })
    await queryInterface.removeColumn('enrolls', 'courseId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'courses',
        key: 'id'
      }
    })
  }
}
