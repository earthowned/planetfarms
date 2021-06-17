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
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { timestamps: true }
  )

    //hooks
  Enterprise.addHook('beforeSave', (enterprise, optionsObject) => {
    let newslug = enterprise.name.split(' ').slice(0, 3).join('_');
    enterprise.slug = sequelize.fn('lower', newslug);
  })

  //association
  Enterprise.associate = (models) => {
    Enterprise.belongsTo(models.Community, {foreignKey: 'communityId'})
  };
  return Enterprise;
}