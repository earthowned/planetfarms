const User = require('./userModel')
const Community = require('./community')

// many to many relationship between user and community through communities_users
Community.belongsToMany(User, {
  through: 'communities_users',
  foreignKey: 'communityId',
  as: 'followers'
})
User.belongsToMany(Community, {
  through: 'communities_users',
  foreignKey: 'userId',
  as: 'followers'
})

// one to many relationshipt between user and community
Community.belongsTo(User, { as: 'creator', foreignKey: 'creatorId' })
User.hasMany(Community, { as: 'creator', foreignKey: 'creatorId' })

module.exports = { User, Community }
