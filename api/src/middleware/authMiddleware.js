const jwt = require('jsonwebtoken')
const jwkToPem = require('jwk-to-pem')
const jwk = require('./jwks.json')
const db = require('../models')
// const LocalAuth = require('../models/localAuthModel.js')
// const User = require('../models/userModel.js')
const pem = jwkToPem(jwk.keys[0])

module.exports = async (req, res, next) => {
  let decoded
  let recoded
  console.log(req.headers)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (process.env.AUTH_METHOD !== 'cognito') {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
      }
      jwt.verify(token, pem, { algorithms: ['RS256'] }, function (err, decodedToken) {
        recoded = decodedToken
      })
      /*
      * TODO: Maintain session and check again local session
      */
      if (process.env.AUTH_METHOD !== 'cognito') {
        req.user = await db.LocalAuth.findByPk(decoded.id)
      } else if(recoded) {
        // req.user = await User.findOne({ where: { userID: decoded.id } })
        req.user = await db.User.findOne({ where: { userID: recoded.sub } })
      } else {
        throw Error('User not found')
      }
      next()
    } catch (error) {
      res.status(401).json({
        error: 'Not authorized, token failed'
      })
    }
  }
  /*console.log('errr')
  res.status(401).json({
    error: 'Not authorized, token failed'
  })*/
}
