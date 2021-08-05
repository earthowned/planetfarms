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
    Courses.hasMany(models.Lesson)
    Courses.hasMany(models.Enroll)
    Courses.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    })
  }
  return Courses
}
