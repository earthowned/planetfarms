const Sequelize = require('sequelize');
const db = require('../config/database.js')

const User = db.define('User', {
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
    },
      timestamps: true,
  });

module.exports =  User;