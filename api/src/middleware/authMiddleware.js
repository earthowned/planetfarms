const jwt = require('jsonwebtoken')
const User = require('../models/userModel.js')

const protect = async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      /*
      * TODO: Maintain session and check again local session
      */
      if (process.env.AUTH_METHOD !== 'cognito') { req.user = await User.findByPk(decoded.id) }
      next()
    } catch (error) {
      console.error(error)
      res.status(401).json({
        error: 'Not authorized, token failed'
      })
    }
  }
  // if (!token) {
  res.status(401)
  throw new Error('Not authorized, no token')
  // }
}

module.exports = { protect }