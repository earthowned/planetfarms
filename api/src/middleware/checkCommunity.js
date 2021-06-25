const db = require('../models')
// check community
module.exports = (req, res, next) => {
  db.Community.findByPk(req.params.id).then(community => {
    if (!community) {
      res.status(404)
      throw new Error('Community doesn\'t exist')
    }
    next()
  }).catch(err => res.json({ error: err.message }).status(400))
}
