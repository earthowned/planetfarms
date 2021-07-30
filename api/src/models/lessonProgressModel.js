module.exports = (sequelize, DataTypes) => {
  const Progress = sequelize.define(
    'progress',
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
  Progress.associate = (models) => {
    Progress.belongsTo(models.Lesson, {
      constraints: true,
      foreignKey: 'lessonId',
      onDelete: 'CASCADE'
    })
  }
  return Progress
}
