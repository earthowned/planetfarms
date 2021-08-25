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
    Video.belongsTo(models.RichText, {
      constraints: true,
      foreignKey: 'richtextId',
      onDelete: 'CASCADE'
    })
  }

  return Video
}
