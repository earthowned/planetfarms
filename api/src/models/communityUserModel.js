module.exports = (sequelize, DataTypes) => {
  const CommunityUser = sequelize.define('communities_users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    },
    communityId: {
      type: DataTypes.INTEGER
    },
    active: {
      type: DataTypes.INTEGER,
      defaultValue: true
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'member'
    }
  },
  { timestamps: true }
  )
  CommunityUser.associate = (models) => {
    CommunityUser.belongsTo(models.User, { foreignKey: 'userId' })
    CommunityUser.belongsTo(models.Community, { foreignKey: 'communityId' })
  }

  return CommunityUser
}
