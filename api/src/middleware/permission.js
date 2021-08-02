const db = require('../models')

function checkRole (dbRole, roles) {
  return roles.some(el => el === dbRole)
}

// async function checkMemberRole(req, roles) {
//   const member = await db.CommunityUser.findOne({ where: { userId: req.user.id, communityId: req.params.id }, attributes: ['role'] })
//   console.log(member.dataValues.role);
//   console.log(checkRole(member.dataValues.role, roles))
//   if (checkRole(member.dataValues.role, roles)) {
//       return true;
//     } else {
//       return false;
//     }
// }

const permit = (roles) => {
  return async (req, res, next) => {
    // getting member role
    const member = await db.CommunityUser.findOne({ where: { userId: req.user.id, communityId: req.params.id }, attributes: ['role'] })

    if (checkRole(member.dataValues.role, roles) || checkRole(req.user.role, roles)) {
      next()
    } else {
      res.json({ error: 'Sorry, You don\'t have permission' })
    }
  }
}

module.exports = permit
