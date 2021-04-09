const { Sequelize } = require('sequelize');

module.exports = new Sequelize('planetfarms', 'test', 'pass', {
  host: 'localhost',
  dialect:  'postgres',
});
