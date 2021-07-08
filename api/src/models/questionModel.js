module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('questions', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    options: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
    },
    testId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
  Question.associate = (models) => {
    Question.belongsTo(models.Test, { foreignKey: 'testId' })
  }
  return Question
}