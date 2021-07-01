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
    creatorId: DataTypes.INTEGER,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
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
    // M:N group and user through groups_users
    Group.belongsToMany(models.User, {
      through: 'groups_users',
      foreignKey: 'groupId',
      as: 'group_followers'
    })

    // one to many relationship with User as creator
    Group.belongsTo(models.User, { foreignKey: 'creatorId', as: 'group_creator' })
  }
  return Group
}
