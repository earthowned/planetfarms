module.exports = (sequelize, DataTypes) => {
  const RichText = sequelize.define('rich_texts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  },
  { timestamps: true })
  RichText.associate = (models) => {
    RichText.hasMany(models.Video, { constraints: true, foreignKey: 'richtextId' })
    RichText.hasMany(models.Photo, { constraints: true, foreignKey: 'richtextId' })
    RichText.hasMany(models.Text, { constraints: true, foreignKey: 'richtextId' })

    RichText.hasOne(models.Lesson, { constraints: true, foreignKey: 'richtextId' })
    RichText.hasOne(models.News, { constraints: true, foreignKey: 'richtextId' })
  }
  return RichText
}
