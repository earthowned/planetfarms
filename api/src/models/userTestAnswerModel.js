module.exports = (sequelize, DataTypes) => {
  const UserTestAnswer = sequelize.define('user_test_answers', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userTestId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    answer: {
        type: DataTypes.TEXT,
    }
  }, { timestamps: false })

  UserTestAnswer.associate = (models) => {
    UserTestAnswer.belongsTo(models.Question, {
      foreignKey: 'questionId'
    })
    UserTestAnswer.belongsTo(models.UserTest, {
      foreignKey: 'userTestId'
    })
  }

  return UserTestAnswer
}
