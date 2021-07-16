module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('questions', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    question: {
      type: DataTypes.TEXT
    },
    answer: {
      type: DataTypes.TEXT,
      
    },
    options: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      
    },
    testId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: 'mcq'
    },
    position: {
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
  Question.associate = (models) => {
    Question.belongsTo(models.Test, { foreignKey: 'testId' })
  }
  return Question
}
