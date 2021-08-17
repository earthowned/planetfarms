'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('enrolls', 'userId');
    await queryInterface.addColumn('enrolls', 'userId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('enrolls', 'userId');
    await queryInterface.addColumn('enrolls', 'userId', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
