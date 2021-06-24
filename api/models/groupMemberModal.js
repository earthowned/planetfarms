module.exports = (sequelize, DataTypes) => {
  const GroupMember = sequelize.define('groups_members',  {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      memberId: {
        type: DataTypes.INTEGER,
      },
      groupId: {
        type: DataTypes.INTEGER,
      },
      active: {
        type: DataTypes.INTEGER,
        defaultValue: true,
      }
  },
  { timestamps: true }
  )
  GroupMember.associate = (models) => {
    GroupMember.belongsTo(models.CommunityUser, {foreignKey: 'memberId'})
    GroupMember.belongsTo(models.Group, {foreignKey: 'groupId'})
  };

  return GroupMember;
}