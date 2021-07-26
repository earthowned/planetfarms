'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => Promise.resolve()
    .then(() => queryInterface.sequelize.query(`
    ALTER TABLE "questions" DROP CONSTRAINT questions_question_key1;
    ALTER TABLE "questions" DROP CONSTRAINT questions_question_key;
    `))
    .then(() => queryInterface.changeColumn('questions', 'question', {
      type: Sequelize.TEXT,
      unique: false,
      allowNull: false
    })),

  down: async (queryInterface, Sequelize) => Promise.resolve()
    .then(() => queryInterface.sequelize.query(`
    ALTER TABLE "questions" ADD CONSTRAINT questions_question_key UNIQUE (question);
    `))
    .then(() => queryInterface.changeColumn('questions', 'question', {
      type: Sequelize.TEXT,
      unique: true,
      allowNull: false
    }))
}
