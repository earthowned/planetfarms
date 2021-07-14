module.exports = (sequelize, DataTypes) => {
  const GroupUser = sequelize.define('groups_users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    },
    groupId: {
      type: DataTypes.INTEGER
    },
    active: {
      type: DataTypes.INTEGER,
      defaultValue: true
    }
  },
  { timestamps: true }
  )
  GroupUser.associate = (models) => {
    GroupUser.belongsTo(models.User, { foreignKey: 'userId' })
    GroupUser.belongsTo(models.Group, { foreignKey: 'groupId' })
  }

  return GroupUser
}
