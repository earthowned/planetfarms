const jwt = require('jsonwebtoken')
const db = require('../models');
// const LocalAuth = require('../models/localAuthModel.js')
// const User = require('../models/userModel.js')

// Protect routes
module.exports = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }
  if (!token) {
    return next(res.status(401).json('Not authorize to access this route'))
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    /*
    * TODO: Maintain session and check again local session
    */
   console.log(decoded)
    req.user = await db.User.findOne({where: {userID: decoded.userId}})
    next()
  } catch (error) {
    res.status(401).json({
      error: 'Not authorized, token failed'
    })
  }
}
