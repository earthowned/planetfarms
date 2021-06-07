const User = require('./userModel')
const Community = require('./community')

Community.belongsToMany(User, {
  through: 'communities_users',
  foreignKey: 'communityId'
})

Community.belongsTo(User, { as: 'creator', foreignKey: 'creatorId' })

User.belongsToMany(Community, {
  through: 'communities_users',
  foreignKey: 'userId'
})

module.exports = { User, Community }
