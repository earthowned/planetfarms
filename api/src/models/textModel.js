module.exports = (sequelize, DataTypes) => {
  const Text = sequelize.define(
    'texts',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      textHeading: {
        type: DataTypes.STRING
      },
      textDescription: {
        type: DataTypes.TEXT
      },
      richtextId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { timestamps: true }
  )
  Text.associate = (models) => {
    Text.belongsTo(models.RichText, {
      foreignKey: 'richtextId',
      onDelete: 'CASCADE'
    })
  }
  return Text
}
