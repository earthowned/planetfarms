module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.changeColumn('users', 'dateOfBirth', {
        type: Sequelize.DATEONLY,
        allowNull: true
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.changeColumn('users', 'dateOfBirth', {
        type: Sequelize.DATE,
        allowNull: true
      })
    ])
  }
}
