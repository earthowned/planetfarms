module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('groups', {
    title: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT
    },
    category: {
      type: DataTypes.STRING
    },
    filename: {
      type: DataTypes.STRING
    },
    communityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { timestamps: true }
  )
  Group.associate = (models) => {
    Group.belongsTo(models.Community, {foreignKey: 'communityId'})
  };
  return Group;
}