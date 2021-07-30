const db = require('../models')

const memberPermit = (role) => {
  return async (req, res, next) => {
    const member = await db.CommunityUser.findOne({ where: { userId: req.user.id, communityId: req.params.id }, attributes: ['role'] })
    if (member.dataValues.role === role) {
      next()
    } else {
      res.json({ error: 'Sorry, You don\'t have permission' })
    }
  }
}

module.exports = memberPermit
