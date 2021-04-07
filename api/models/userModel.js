const Sequelize = require('sequelize');
const db = require('../config/database.js')

const User = db.define('User', {
    user: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
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