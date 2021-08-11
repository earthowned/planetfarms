module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'categories',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { timestamps: true }
  )

  Category.associate = (models) => {
    Category.hasMany(models.Courses)
  }
  return Category
}
