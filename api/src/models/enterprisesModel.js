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
    },
    creatorId: DataTypes.INTEGER,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  { timestamps: true }
  )

  // hooks
  Enterprise.addHook('beforeSave', (enterprise, optionsObject) => {
    const newslug = enterprise.title.split(' ').slice(0, 3).join('_')
    enterprise.slug = sequelize.fn('lower', newslug)
  })

  // association
  Enterprise.associate = (models) => {
    Enterprise.belongsTo(models.Community, { foreignKey: 'communityId' })

    // M:N community and user through enterprises_users
    Enterprise.belongsToMany(models.User, {
      through: 'enterprises_users',
      foreignKey: 'enterpriseId',
      as: 'enterprise_followers'
    })

    Enterprise.belongsTo(models.User, { foreignKey: 'creatorId', as: 'enterprise_creator' })
  }
  return Enterprise
}
