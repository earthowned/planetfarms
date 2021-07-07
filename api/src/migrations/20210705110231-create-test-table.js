'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('tests', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
        },
        test_name:  {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        lessonId: {
          type: Sequelize.INTEGER,
          unique: true,
          references: {
            model: 'lessons',
            key: 'id'
          }
        },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tests')
  }
};
