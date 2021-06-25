// const Sequelize = require('sequelize')
// const {sequelize} = require('../config/database.js')

// const User = sequelize.define('users', {
//   password: {
//     type: Sequelize.STRING
//   },
//   email: {
//     type: Sequelize.STRING
//   },
//   name: {
//     type: Sequelize.STRING
//   }
// }, { timestamps: false })

// module.exports = User
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
      password: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
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
  };
  return User;
}