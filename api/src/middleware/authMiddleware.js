const jwt = require('jsonwebtoken')
const jwkToPem = require('jwk-to-pem')
const db = require('../models')

let decoded

const responses = [
  {
    error: 'Invalid token provided.',
    name: 'InvalidToken'
  },
  {
    error: 'The token has been expired.',
    name: 'TokenExpired'
  },
  {
    error: 'Not authorized, token failed',
    name: 'Unauthorized'
  },
  {
    error: 'Unauthorized',
    name: 'Unauthorized'
  }
]

function checkAuthorization (err) {
  if (err.message === 'jwt expired') {
    throw Error('TokenExpired')
  } else {
    throw Error('InvalidToken')
  }
}

const throwError = message => responses.filter(response => response.name.match(message))

async function maintainState (req, next) {
  if (process.env.AUTH_METHOD !== 'cognito') {
    req.user = await db.User.findOne({ where: { userID: decoded.id } })
  } else if (decoded) {
    req.user = await db.User.findOne({ where: { userID: decoded.sub } })
  } else {
    throw Error('User not found')
  }
}

const decode = (err, decodedToken) => {
  if (err) {
    checkAuthorization(err)
  }
  decoded = decodedToken
}

module.exports = async (req, res, next) => {
  const headers = req.headers.authorization && req.headers.authorization.startsWith('Bear')
  if (
    headers
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (process.env.AUTH_METHOD !== 'cognito') {
        jwt.verify(token, process.env.JWT_SECRET, decode)
      } else {
        const jwk = require('./jwks.json')
        const pem = jwkToPem(jwk.keys[0])
        jwt.verify(token, pem, { algorithms: ['RS256'] }, decode)
      }
      /*
      * TODO: Maintain session and check again local session
      */
      await maintainState(req, next)
      next()
    } catch (error) {
      res.status(401).json(throwError(error.message))
    }
  } else {
    res.status(401).json(throwError('Unauthorized'))
  }
}
