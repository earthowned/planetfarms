module.exports = (sequelize, DataTypes) => {
  const CommunityUser = sequelize.define('communities_users',  {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      communityId: {
        type: DataTypes.INTEGER,
      },
      active: {
        type: DataTypes.INTEGER,
        defaultValue: true,
      }
  },
  { timestamps: true }
  )
  CommunityUser.associate = (models) => {
    CommunityUser.belongsTo(models.User, {foreignKey: 'userId'})
    CommunityUser.belongsTo(models.Community, {foreignKey: 'communityId'})

    //n:m community_user and enterprise
    CommunityUser.belongsToMany(models.Enterprise, {
      through: 'enterprises_members',
      foreignKey: 'memberId',
      as: 'enterprise_followers'
    })
    //n:m community_user and group
    CommunityUser.belongsToMany(models.Group, {
      through: 'groups_members',
      foreignKey: 'memberId',
      as: 'group_followers'
    })
  };

  return CommunityUser;
}