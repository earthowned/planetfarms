module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('photos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    photoDescription: {
      type: DataTypes.STRING
    },
    lessonImg: {
      type: DataTypes.STRING
    },
    isImgDesc: {
      type: DataTypes.BOOLEAN
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
  Photo.associate = (models) => {
    Photo.belongsTo(models.RichText, {
      constraints: true,
      foreignKey: 'richtextId',
      onDelete: 'CASCADE'
    })
  }
  return Photo
}
