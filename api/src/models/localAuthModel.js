const bcrypt = require('bcryptjs');

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

  LocalAuth.beforeCreate((user) => {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
  })

  LocalAuth.associate = (models) => {
    LocalAuth.hasOne(models.User, {
      foreignKey: 'userID'
    })
  }
  return LocalAuth
}
