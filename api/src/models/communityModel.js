const Sequelize = require('sequelize')
const db = require('../config/database')
const {sequelize} = require('./index');

module.exports = (sequelize, DataTypes) => {
  const Community = sequelize.define('communities',
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING
      },
      attachment: {
        type: DataTypes.STRING
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: true }
  )

  Community.associate = (models) => {
    //M:N community and user through communities_users
    Community.belongsToMany(models.User, {
      through: 'communities_users',
      foreignKey: 'communityId',
      as: 'followers'
    })

    //M:1 community and user as creator
    Community.belongsTo(models.User, {foreignKey: 'creatorId', as: 'creator' })
    
    //1:M community and group
    Community.hasMany(models.Group, {
      foreignKey: 'communityId'
    })

    //1:M community and group
    Community.hasMany(models.Enterprise, {
      foreignKey: 'communityId'
    })
  }
  return Community
}
