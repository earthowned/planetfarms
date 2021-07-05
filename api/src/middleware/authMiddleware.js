const jwt = require('jsonwebtoken')
const jwkToPem = require('jwk-to-pem')
const jwk = require('./jwks.json')
const LocalAuth = require('../models/localAuthModel.js')
const User = require('../models/userModel.js')

const pem = jwkToPem(jwk.keys[0])

const protect = async (req, res, next) => {
  let token
  let decoded
  let recoded
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      if (process.env.AUTH_METHOD !== 'cognito') {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
      }
      jwt.verify(token, pem, { algorithms: ['RS256'] }, function (err, decodedToken) {
        console.log('Error: ' + err)
        recoded = decodedToken
      })
      console.log('Decoded: ', recoded)
      /*
      * TODO: Maintain session and check again local session
      */
      if (process.env.AUTH_METHOD !== 'cognito') {
        req.user = await LocalAuth.findByPk(decoded.id)
      } else {
        // req.user = await User.findOne({ where: { userID: decoded.id } })
        req.user = await User.findOne({ where: { userID: recoded.sub } })
      }
      next()
    } catch (error) {
      console.error(error)
      res.status(401).json({
        error: 'Not authorized, token failed'
      })
    }
  }
}

module.exports = { protect }
