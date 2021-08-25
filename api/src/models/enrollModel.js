module.exports = (sequelize, DataTypes) => {
  const Enroll = sequelize.define(
    'enrolls',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER
      },
      courseId: {
        type: DataTypes.INTEGER
      },
      isEnroll: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
  Enroll.associate = (models) => {
    Enroll.belongsTo(models.Courses, {
      constraints: true,
      foreignKey: 'courseId'
    })
    Enroll.belongsTo(models.User, {
      constraints: true,
      foreignKey: 'userId'
    })
  }
  return Enroll
}
