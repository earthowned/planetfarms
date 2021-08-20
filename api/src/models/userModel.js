module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: DataTypes.STRING
    },
    isLocalAuth: {
      type: DataTypes.BOOLEAN
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.TEXT
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY
    },
    lastLogin: {
      type: DataTypes.DATE
    },
    numberOfVisit: {
      type: DataTypes.INTEGER
    },
    attachments: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    }
  },
  { timestamps: true }
  )
  User.associate = (models) => {
    User.belongsToMany(models.Test, {
      foreignKey: 'userId',
      through: 'users_tests'
    })
    User.belongsToMany(models.Community, {
      through: 'communities_users',
      foreignKey: 'userId',
      as: 'followers'
    })

    User.hasMany(models.Community, { foreignKey: 'creatorId', as: 'creator' })

    // n:m community_user and enterprise
    User.belongsToMany(models.Enterprise, {
      through: 'enterprises_users',
      foreignKey: 'userId',
      as: 'enterprise_followers'
    })
    // n:m community_user and group
    User.belongsToMany(models.Group, {
      through: 'groups_users',
      foreignKey: 'userId',
      as: 'group_followers'
    })

    // n:m user and course through enrolls
    User.belongsToMany(models.Courses, {
      through: 'enrolls',
      foreignKey: 'userId',
      as: 'enrolledUser',
      onDelete: 'CASCADE'
    })

    User.hasMany(models.LessonProgress, {
      constraints: true,
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })

    User.hasMany(models.CourseView, { foreignKey: 'userId' })
    // one to many relationship with enterprise
    User.hasMany(models.Enterprise, { foreignKey: 'creatorId', as: 'enterprise_creator' })

    // one to many relationship with group
    User.hasMany(models.Group, { foreignKey: 'creatorId', as: 'group_creator' })
  }
  return User
}
