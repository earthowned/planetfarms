'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('course_views', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      courseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      visitedAt: {
        type: Sequelize.DATE
      }
      }, {
        timestamps: true,
        createdAt: 'visitedAt',
        updatedAt: false
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('course_views');
  }
};
