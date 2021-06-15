const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(path.join(__dirname, '/../config/config.js'))[env]
const User = require('./userModel')
const Community = require('./communityModel')
const CommunityUser = require('./communityUserModal')

const sequelize = new Sequelize(config.database, config.username, config.password, config)
// const db = {};

// fs.readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))
//     db[model.name] = sequelize.model
//   })

const db = {
  User: User(sequelize, Sequelize.DataTypes),
  Community: Community(sequelize, Sequelize.DataTypes),
  CommunityUser: CommunityUser(sequelize, Sequelize)
}

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db


// const User = require('./userModel')
// const Community = require('./community')

// // many to many relationship between user and community through communities_users
// Community.belongsToMany(User, {
//   through: 'communities_users',
//   foreignKey: 'communityId',
//   as: 'followers'
// })
// User.belongsToMany(Community, {
//   through: 'communities_users',
//   foreignKey: 'userId',
//   as: 'followers'
// })

// // one to many relationshipt between user and community
// Community.belongsTo(User, { as: 'creator', foreignKey: 'creatorId' })
// User.hasMany(Community, { as: 'creator', foreignKey: 'creatorId' })

// module.exports = { User, Community }
