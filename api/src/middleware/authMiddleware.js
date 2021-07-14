const jwt = require('jsonwebtoken')
const jwkToPem = require('jwk-to-pem')
const db = require('../models')

module.exports = async (req, res, next) => {
  let decoded
  let recoded
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (process.env.AUTH_METHOD !== 'cognito') {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
      } else {
        const jwk = require('./jwks.json')
        const pem = jwkToPem(jwk.keys[0])
        jwt.verify(token, pem, { algorithms: ['RS256'] }, function (err, decodedToken) {
          if (err) {
            if (err.message === 'jwt expired') {
              throw Error('TokenExpired')
            } else {
              throw Error('InvalidToken')
            }
          }
          recoded = decodedToken
        })
      }
      /*
      * TODO: Maintain session and check again local session
      */
      if (process.env.AUTH_METHOD !== 'cognito') {
        req.user = await db.LocalAuth.findByPk(decoded.id)
      } else if (recoded) {
        req.user = await db.User.findOne({ where: { userID: recoded.sub } })
      } else {
        throw Error('User not found')
      }
      next()
    } catch (error) {
      switch (error.message) {
        case 'InvalidToken':
          res.status(401).json({
            error: 'Invalid token provided.',
            name: error.message
          })
          break
        case 'TokenExpired':
          res.status(401).json({
            error: 'The token has been expired.',
            name: error.message
          })
          break
        default:
          res.status(401).json({
            error: 'Invalid token provided.',
            name: 'InvalidToken'
          })
          break
      }
    }
  } else {
    res.status(401).json({
      error: 'Unauthorized',
      name: 'Unauthorized'
    })
  }
}
