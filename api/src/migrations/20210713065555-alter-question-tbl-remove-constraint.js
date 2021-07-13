'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('questions', "answer", {
      type: Sequelize.TEXT,
        allowNull: true
    })
    await queryInterface.changeColumn('questions', "options", {
      type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true
    })
    await queryInterface.changeColumn('questions', "question", {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: false
    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn('questions', "answer", {
      type: Sequelize.TEXT,
        allowNull: false
    })
    await queryInterface.changeColumn('questions', "options", {
      type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    })
    await queryInterface.changeColumn('questions', "question", {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true
    })
  }
};
