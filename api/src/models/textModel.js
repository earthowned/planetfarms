module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define('texts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    textHeading: {
      type: DataTypes.STRING,
    },
    textDescription: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: true })
  Text.associate = (models) => {
    Text.belongsTo(models.Lesson, { constraints: true, foreignKey: 'lessonId' })
  }
  return Text
}
