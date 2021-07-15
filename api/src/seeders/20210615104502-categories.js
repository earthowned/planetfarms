module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const date = new Date()
    const data = ['Farms'].map(
      (name) => {
        return {
          name,
          createdAt: date,
          updatedAt: date
        }
      }
    )

    return queryInterface.bulkInsert('categories', data, {})
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('categories', null, {})
  }
}
