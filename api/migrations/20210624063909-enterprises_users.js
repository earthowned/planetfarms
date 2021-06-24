'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('enterprises_users', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      enterpriseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'enterprises',
          key: 'id'
        },
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }},
      {
        timeStamps: true
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeTable('enterprises_users');
  }
};
