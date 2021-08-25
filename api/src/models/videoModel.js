module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define(
    'videos',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      videoTitle: {
        type: DataTypes.STRING
      },
      videoDescription: {
        type: DataTypes.STRING
      },
      videoCover: {
        type: DataTypes.STRING
      },
      videoLink: {
        type: DataTypes.STRING
      },
      videoResource: {
        type: DataTypes.STRING
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
  { timestamps: true })

  Video.associate = (models) => {
    Video.belongsTo(models.Lesson, {
      constraints: true,
      foreignKey: 'lessonId',
      onDelete: 'CASCADE'
    })
    Video.belongsTo(models.News, { constraints: true, foreignKey: 'newsId' })
  }

  return Video
}
