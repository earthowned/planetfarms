module.exports = (sequelize, DataTypes) => {
  const LessonProgress = sequelize.define(
    'lesson_progresses',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isCompleted: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
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
  }
  return LessonProgress
}