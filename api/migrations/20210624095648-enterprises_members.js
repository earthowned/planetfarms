'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('enterprises_members', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      memberId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'communities_users',
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    
    })
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('enterprises_members');
  }
};
