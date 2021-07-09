module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define(
    'materials',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      material: {
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING
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
  Material.associate = (models) => {
    Material.belongsTo(models.Lesson, {
      constraints: true,
      foreignKey: 'lessonId'
    })
  }
  return Material
}
