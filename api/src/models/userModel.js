// const Sequelize = require('sequelize')
// const {sequelize} = require('../config/database.js')

// module.exports = User
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: Sequelize.STRING
    },
    isLocalAuth: {
      type: Sequelize.BOOLEAN
    },
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.TEXT
    },
    dateOfBirth: {
      type: Sequelize.DATE
    },
    lastLogin: {
      type: Sequelize.DATE
    },
    numberOfVisit: {
      type: Sequelize.INTEGER
    },
    attachments: {
      type: Sequelize.TEXT
    }
  },
    { timestamps: true }
  )
  User.associate = (models) => {
    User.belongsToMany(models.Community, {
      through: 'communities_users',
      foreignKey: 'userId',
      as: 'followers'
    })

    User.hasMany(models.Community, { foreignKey: 'creatorId', as: 'creator' })

    //n:m community_user and enterprise
    User.belongsToMany(models.Enterprise, {
      through: 'enterprises_users',
      foreignKey: 'userId',
      as: 'enterprise_followers'
    })
    //n:m community_user and group
    User.belongsToMany(models.Group, {
      through: 'groups_users',
      foreignKey: 'userId',
      as: 'group_followers'
    })

    //one to many relationship with enterprise
     User.hasMany(models.Enterprise, {foreignKey: 'creatorId', as: 'enterprise_creator'})

    //one to many relationship with group
     User.hasMany(models.Group, {foreignKey: 'creatorId', as: 'group_creator'})
  };
  return User;
}