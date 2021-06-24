module.exports = (sequelize, DataTypes) => {
  const EnterpriseUser = sequelize.define('enterprises_users',  {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      enterpriseId: {
        type: DataTypes.INTEGER,
      },
      active: {
        type: DataTypes.INTEGER,
        defaultValue: true,
      }
  },
  { timestamps: false }
  )
  EnterpriseUser.associate = (models) => {
    EnterpriseUser.belongsTo(models.User, {foreignKey: 'userId'})
    EnterpriseUser.belongsTo(models.Enterprise, {foreignKey: 'enterpriseId'})
  };

  return EnterpriseUser;
}