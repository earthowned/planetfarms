const jwt = require('jsonwebtoken')
const LocalAuth = require('../models/localAuthModel.js')
const User = require('../models/userModel.js')

//Protect routes
module.exports = async (req, res, next) => {
  let token;
  if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer') 
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if(!token) {
    return next(res.status(401).json('Not authorize to access this route'));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    /*
    * TODO: Maintain session and check again local session
    */
    if (process.env.AUTH_METHOD !== 'cognito') {
      req.user = await LocalAuth.findByPk(decoded.id)
    } else {
      req.user = await User.findOne({ where: { userID: decoded.id } })
    }
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({
      error: 'Not authorized, token failed'
    })
  }
}
