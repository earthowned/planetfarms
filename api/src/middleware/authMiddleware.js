const jwt = require('jsonwebtoken')
const jwkToPem = require('jwk-to-pem')
const db = require('../models')

const jwk = {
  keys: [
    {
      alg: 'RS256',
      e: 'AQAB',
      kid: 'r7jgQgkeaohpkgX3oi2gqbnm4urE1apnOKW+pH2QqUY=',
      kty: 'RSA',
      n: 'y1WEeNdw60nPPVunUORukhKYAokPtOzNk7TlHBvGvobeYooTBDYu4dJGPlmUGTAJpFgz5zZrnqjCnpjZG7w-RTcwwQursm-F5TX9wnkiAM063_Uq3noER-gzx78of5eltGDrEnBwI1Ekg-ElrcJfa0RtTO62c49LzMU42tXawunwwnI2YsD-QlHsumHFEQer7l42sGm-NoLEv9BsYYbPJcDJvNsoI7G62e5XFEi1kQm2a3ueHBEYacl-xla7yUsxKh82Dz4r8WSWYdF-QEiLnTycOB5OV1wxRvYi7a-MDvFc7gDscbEDFe4JQwyHr9sbfUNEZflib2EoFsf4xiQ2Pw',
      use: 'sig'
    },
    {
      alg: 'RS256',
      e: 'AQAB',
      kid: 'MfmgZ6B+QrXB/QT/VTCWBDF1bcYQwuTEYOCUEVJ0h4o=',
      kty: 'RSA',
      n: '5DKbdRdcOGGHV-wwrlUDOnMXkw6_x8aa-W0gxEopXA8raJVzMbjWEyQ5PHxVRcmCrFV2owzlEZ6mFcrl4IAc-J7hnk8SYzsv0AGd9xuoAx_34eeC6cJ0_c3RxVm7aVLcEsYxFQX59V1HDhoOeryYfuO32j_YrzaRlJCzhE0cEn6syslIJmaPpE4KjiFZs6x6d-3oLq8uWQzqnbG3tSe8YmQ2f_RMx7E1PZ9jPZ4q-Es_PIsxALby-DPBRner664yOTJUEjZctQ72UF3FSXYFdWpGg3P70ZIYkjhW5S0DG83_FvBx8YTvjnaOWV4DgJDTJgfWeHnGwG6bDE0cmcMS6w',
      use: 'sig'
    }
  ]
}

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
        jwt.verify(token, process.env.JWT_SECRET, function (err, decodedToken) {
          if (err) {
            if (err.message === 'jwt expired') {
              throw Error('TokenExpired')
            } else {
              throw Error('InvalidToken')
            }
          }
          decoded = decodedToken
        })
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
        req.user = await db.User.findOne({ where: { userID: decoded.id } })
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
            error: 'Not authorized, token failed',
            name: 'Unauthorized'
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
