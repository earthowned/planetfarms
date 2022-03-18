'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('news','category', {
      type: Sequelize.STRING
    });
  },
  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("news", "category", {
        type: Sequelize.ARRAY(Sequelize.TEXT) + 'USING CAST(CONCAT(\'{\', "category", \'}\') as ' + Sequelize.ARRAY(Sequelize.TEXT) + ')'
      })
    ]);
  }
};
