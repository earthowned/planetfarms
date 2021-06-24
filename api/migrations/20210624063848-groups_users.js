'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('groups_users', { 
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
      groupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'groups',
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
  await queryInterface.removeTable('groups_users');
  }
};
