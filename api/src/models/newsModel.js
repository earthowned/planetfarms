module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('news', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT
    },
    message: {
      type: DataTypes.TEXT
    },
    docType: {
      type: DataTypes.STRING
    },
    readTime: {
      type: DataTypes.DATE
    },
    language: {
      type: DataTypes.STRING
    },
    creator: {
      type: DataTypes.STRING
    },
    textDetail: {
      type: DataTypes.JSON
    },
    imageDetail: {
      type: DataTypes.JSON
    },
    videoDetail: {
      type: DataTypes.JSON
    },
    category: {
      type: DataTypes.STRING
    },
    _attachments: {
      type: DataTypes.STRING
    },
    communityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  { timestamps: true }
  )

  // association
  News.associate = (models) => {
    News.belongsTo(models.Community, { foreignKey: 'communityId' })
  }
  return News
}
