module.exports = (sequelize, DataTypes) => {
  const Courses = sequelize.define(
    'courses',
    {
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
      thumbnail: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DOUBLE
      },
      isPublished: {
        type: DataTypes.BOOLEAN,
      },
      isFree: {
        type: DataTypes.BOOLEAN,
        default: false
      }
    },
    { timestamps: true }
  )
  Courses.associate = (models) => {
    Courses.hasMany(models.Lesson, { foreignKey: 'courseId' })
    // n:m course and user through enroll
    Courses.belongsToMany(models.User, {
      through: 'enrolls',
      foreignKey: 'courseId',
      as: 'enrolledUser',
      onDelete: 'CASCADE'
    })
    Courses.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    })
    Courses.belongsTo(models.User, { foreignKey: 'creatorId', as: 'creator' })
    Courses.belongsTo(models.RichText, { foreignKey: 'richtextId' })
    Courses.hasMany(models.CourseView, { foreignKey: 'courseId' })
    Courses.hasMany(models.Enroll, { foreignKey: 'courseId' })
  }
  return Courses
}
