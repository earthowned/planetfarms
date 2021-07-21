module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('enrolls', 'courseId', {
      type: Sequelize.INTEGER,
      unique: true,
      references: {
        model: 'courses',
        key: 'id'
      }
    })
    queryInterface.addColumn('enrolls', 'courseId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'courses',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('enrolls', 'courseId', {
      type: Sequelize.INTEGER,
      unique: true,
      references: {
        model: 'courses',
        key: 'id'
      }
    })
    queryInterface.removeColumn('enrolls', 'courseId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'courses',
        key: 'id'
      }
    })
  }
}
