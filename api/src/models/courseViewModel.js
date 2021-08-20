module.exports = (sequelize, DataTypes) => {
  const CourseView = sequelize.define(
    'course_views',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      visitedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: true,
      createdAt: 'visitedAt',
      updatedAt: false
    }
  )
  CourseView.associate = (models) => {
    CourseView.belongsTo(models.Courses, { foreignKey: 'courseId' })
    CourseView.belongsTo(models.User, { foreignKey: 'userId' })
  }
  return CourseView
}
