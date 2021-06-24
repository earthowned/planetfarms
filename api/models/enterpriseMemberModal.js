module.exports = (sequelize, DataTypes) => {
  const EnterpriseMember = sequelize.define('enterprises_members',  {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      memberId: {
        type: DataTypes.INTEGER,
      },
      enterpriseId: {
        type: DataTypes.INTEGER,
      },
      active: {
        type: DataTypes.INTEGER,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  }
  )
  EnterpriseMember.associate = (models) => {
    EnterpriseMember.belongsTo(models.CommunityUser, {foreignKey: 'memberId'})
    EnterpriseMember.belongsTo(models.Enterprise, {foreignKey: 'enterpriseId'})
  };

  return EnterpriseMember;
}