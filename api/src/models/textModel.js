module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define(
    'texts',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      textHeading: {
        type: DataTypes.STRING
      },
      textDescription: {
        type: DataTypes.TEXT
      },
      richtextId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
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
  Text.associate = (models) => {
    Text.belongsTo(models.Lesson, {
      constraints: true,
      foreignKey: 'lessonId'
    })
    Text.belongsTo(models.News, {
      constraints: true,
      foreignKey: 'newsId'
    })
  }
  return Text
}
