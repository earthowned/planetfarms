module.exports = (sequelize, DataTypes) => {
  const LessonProgress = sequelize.define(
    'lesson_progresses',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lessonId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      startTime: {
        type: DataTypes.STRING
      },
      endTime: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  )
  LessonProgress.associate = (models) => {
    LessonProgress.belongsTo(models.Lesson, {
      constraints: true,
      foreignKey: 'lessonId',
      onDelete: 'CASCADE'
    })
    LessonProgress.belongsTo(models.User, {
      constraints: true,
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  }
  return LessonProgress
}
