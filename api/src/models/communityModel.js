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
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: true }
  )
  //hooks
  Community.addHook('beforeSave', (community, optionsObject) => {
    let newslug = community.name.split(' ').slice(0, 3).join('_');

    community.slug = sequelize.fn('lower', newslug);
  })

  //association is here
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
    
    //1:M community and group
    Community.hasMany(models.News, {
      foreignKey: 'communityId'
    })
  }
  return Community
}
