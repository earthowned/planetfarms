
module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.createTable('collection_users',
   {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true
     },
     userId: {
       type: Sequelize.INTEGER,
       allowNull: false
     },
     collectionId: {
       type: Sequelize.INTEGER,
       allowNull: false
     },
     createdAt: {
       type: Sequelize.DATE
     },
     updatedAt: {
       type: Sequelize.DATE
     }

   }
   )
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('collection_users',{})
  }
};
