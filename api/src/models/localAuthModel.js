
module.exports = (sequelize, DataTypes) => {
  const LocalAuth = sequelize.define('localauths', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  },
  { timestamps: true }
  )
  return LocalAuth
}

