module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const data = ['Farming', 'Agriculture', 'Travelling', 'New Course'].map(
      (name) => {
        return {
          name,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      }
    )

    return queryInterface.bulkInsert('categories', data, {})
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('categories', null, {})
  }
}
