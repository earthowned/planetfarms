module.exports = (sequelize, DataTypes) => {
  const Enterprise = sequelize.define('enterprises', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    filename: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    },
    communityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { timestamps: true }
  )
  Enterprise.associate = (models) => {
    Enterprise.belongsTo(models.Community, {foreignKey: 'communityId'})
  };
  return Enterprise;
}