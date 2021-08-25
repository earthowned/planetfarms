'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('news', 'richtextId', {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
      references: {
        model: 'rich_texts',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('news', 'richtextId')
  }
};
