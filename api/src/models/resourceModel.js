module.exports = (sequelize, DataTypes) => {
  const Resources = sequelize.define('resources',
    {
      title: {
        type: DataTypes.TEXT
      },
      filename: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      resourceType: {
        type: DataTypes.STRING
      }
    },
    { timestamps: true }
  )
  return Resources
}
