module.exports = (sequelize, DataTypes) => {
  const Lesson = sequelize.define('lessons', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    coverImg: {
      type: DataTypes.STRING
    },
    courseId: {
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  { timestamps: true })

  Lesson.associate = (models) => {
    Lesson.hasOne(models.Test, {
      foreignKey: 'lessonId'
    })
    Lesson.hasMany(models.Video)
    Lesson.hasMany(models.Photo)
    Lesson.hasMany(models.Text)
    Lesson.hasMany(models.Material)
    Lesson.belongsTo(models.Courses, { constraints: true, foreignKey: 'courseId' })
  }

  return Lesson
}
