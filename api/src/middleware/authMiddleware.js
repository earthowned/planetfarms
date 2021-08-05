const jwt = require('jsonwebtoken')
const jwkToPem = require('jwk-to-pem')
const db = require('../models')

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

function checkAuthorization(err) {
  if (err.message === 'jwt expired') {
    throw Error('TokenExpired')
  } else {
    throw Error('InvalidToken')
  }
}

const throwError = message => responses.filter(response => response.name.match(message))

function maintainState() {
      if (process.env.AUTH_METHOD !== 'cognito') {
        req.user = await db.User.findOne({ where: { userID: decoded.id } })
      } else if (recoded) {
        req.user = await db.User.findOne({ where: { userID: recoded.sub } })
      } else {
        throw Error('User not found')
      }

}

const recode = (err, decodedToken) => {
  if (err) {
   checkAuthorization(err) 
  }
  recoded = decodedToken
}

const decode = (err, decodedToken) => {
  if (err) {
   checkAuthorization(err) 
  }
  decoded = decodedToken
}

module.exports = async (req, res, next) => {
  let decoded
  let recoded
  const headers = req.headers.authorization && req.headers.authorization.startsWith('Bear')
  if (
    headers
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      if (process.env.AUTH_METHOD !== 'cognito') {
        jwt.verify(token, process.env.JWT_SECRET, decode(err, decodedToken))
      } else {
        const jwk = require('./jwks.json')
        const pem = jwkToPem(jwk.keys[0])
        jwt.verify(token, pem, { algorithms: ['RS256'] }, recode(err, decodedToken))
      }
      /*
      * TODO: Maintain session and check again local session
      */
      maintainState()
      next()
    } catch (error) {
      res.status(401).json(throwError(error.message))      
    }
  } else {
    res.status(401).json(throwError('Unauthorized'))
  }
}
