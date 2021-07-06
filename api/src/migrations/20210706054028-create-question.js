'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('questions', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
        },
        question:  {
          type: Sequelize.TEXT,
          allowNull: false,
          unique: true
        },
        answer: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        options: {
          type: Sequelize.ARRAY(Sequelize.TEXT),
          allowNull: false
        },
        testId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'tests',
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
    await queryInterface.dropTable('questions')
  }
};
