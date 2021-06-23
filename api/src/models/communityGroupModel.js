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
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  },
  { timestamps: true }
  )

  // hooks
  Group.addHook('beforeSave', (group, optionsObject) => {
    const newslug = group.title.split(' ').slice(0, 3).join('_')
    group.slug = sequelize.fn('lower', newslug)
  })

  // association
  Group.associate = (models) => {
    Group.belongsTo(models.Community, { foreignKey: 'communityId' })
  }
  return Group
}
