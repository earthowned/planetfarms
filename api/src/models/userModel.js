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
  };
  return User;
}