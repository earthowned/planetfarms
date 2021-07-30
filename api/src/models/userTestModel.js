module.exports = (sequelize, DataTypes) => {
  const UserTest = sequelize.define('users_tests', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: DataTypes.INTEGER,
    testId: DataTypes.INTEGER,
    marks: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    total_marks: DataTypes.INTEGER,
    is_passed: DataTypes.BOOLEAN,
    test_taken: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, { timestamps: false })
  UserTest.associate = (models) => {
    UserTest.belongsTo(models.User, {
      foreignKey: 'userId'
    })
    UserTest.belongsTo(models.Test, {
      foreignKey: 'testId'
    })
    UserTest.hasMany(models.UserTestAnswer, {
      foreignKey: 'userTestId'
    })
  }

  return UserTest
}
