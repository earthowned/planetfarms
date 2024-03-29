const jwt = require('jsonwebtoken')
const jwkToPem = require('jwk-to-pem')
const db = require('../models')

let coded
const responses = [
  {
    name: 'InvalidToken',
    error: 'Invalid token provided.'
  },
  {
    name: 'TokenExpired',
    error: 'The token has been expired.'
  },
  {
    name: 'Unauthorized',
    error: 'Not authorized, token failed'
  }
]

function checkAuthorization (err) {
  if (err.message === 'jwt expired') {
    throw Error('TokenExpired')
  } else {
    throw Error('InvalidToken')
  }
}

const throwError = (message) =>
  responses.find((response) => response.name.match(message))

const verifyToken = (token) => {
  process.env.AUTH_METHOD !== 'cognito'
    ? jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        decodeTokenFnc(err, decodedToken)
      })
    : cognitoJwkPem(token)
}

const cognitoJwkPem = (token) => {
  const jwk = require('./jwks.json')
  const pem = jwkToPem(jwk.keys[0])
  jwt.verify(token, pem, { algorithms: ['RS256'] }, (err, decodedToken) => {
    decodeTokenFnc(err, decodedToken)
  })
}

const decodeTokenFnc = (err, decodedToken) => {
  if (err) {
    checkAuthorization(err)
  }
  coded = decodedToken
}

async function maintainState (req) {
  try {
    process.env.AUTH_METHOD !== 'cognito'
      ? (req.user = await db.User.findOne({
          where: { userID: coded.id }
        }))
      : (req.user = await db.User.findOne({
          where: { userID: coded.sub }
        }))
  } catch (error) {
    throw Error('User not found')
  }
}

module.exports = async (req, res, next) => {
  const headers =
    req.headers.authorization && req.headers.authorization.startsWith('Bearer')
  if (headers) {
    try {
      const token = req.headers.authorization.split(' ')[1]
      verifyToken(token)
      await maintainState(req)
      next()
    } catch (error) {
      res.status(401).json(throwError(error.message))
    }
  } else {
    res.status(401).json(throwError('Unauthorized'))
  }
}
