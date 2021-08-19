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
      creator: {
        type: DataTypes.STRING
      },
      thumbnail: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.DOUBLE
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
  }
  return Courses
}
