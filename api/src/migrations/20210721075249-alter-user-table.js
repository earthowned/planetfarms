module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.changeColumn('users', 'dateOfBirth', {
        type: Sequelize.DATEONLY,
        allowNull: true
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      await queryInterface.changeColumn('users', 'dateOfBirth', {
        type: Sequelize.DATE,
        allowNull: true
      })
    ])
  }
}
