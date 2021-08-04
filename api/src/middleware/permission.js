const db = require('../models')

const permit = (roles) => {
  return async (req, res, next) => {
    // getting member role
    const member = await db.CommunityUser.findOne({ where: { userId: req.user.id, communityId: req.params.id }, attributes: ['role'] })

    if(member.dataValues.role) {
      checkMemberRoles(roles, member, next, res)
    } else {
      checkUserRoles(roles, next, res, req)
    }

  }
}

const checkRole = (roles, dbRole) => {
  return roles.includes(dbRole)
}

const checkMemberRoles = (roles, member, next, res) => {
  if (checkRole(roles, member.dataValues.role)) {
        next()
      } else {
        res.json({ error: 'Sorry, You don\'t have permission' })
      }
}

const checkUserRoles = (roles, next, res, req) => {
   if (checkRole(roles, req.user.role)) {
        next()
      } else {
        res.json({ error: 'Sorry, You don\'t have permission' })
      }
}

module.exports = permit
