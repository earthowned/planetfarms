// const jwt = require('jsonwebtoken')
// const db = require('../models');
// require('dotenv').config();

// const protect = async (req, res, next) => {
//   let token
//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith('Bearer')
//   ) {
//     try {
//       token = req.headers.authorization.split(' ')[1]
//       console.log(token);
//       const decoded = jwt.verify(token, 'asdhfuhasdfuahsdof')
//       console.log(decoded.id);
//       /*
//       * TODO: Maintain session and check again local session
//       */
//       if (process.env.AUTH_METHOD !== 'cognito') { req.user = await db.User.findByPk(decoded) }
//       next()
//     } catch (error) {
//       console.error(error)
//       res.status(401).json({
//         error: 'Not authorized, token failed'
//       })
//     }
//   }
//   // if (!token) {
//   res.status(401)
//   throw new Error('Not authorized, no token')
//   // }
// }

// module.exports = { protect }

const jwt = require('jsonwebtoken');
const db = require('../models');

//Protect routes

module.exports = async (req, res, next) => {
    let token;

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer') 
    ) {
        token = req.headers.authorization.split(' ')[1];
    }

    // else if (req.cookies.token) {
    //     token = req.cookies.token
    // }

    // Make sure token exist
    if(!token) {
      console.log('hellow')
        return next(res.status(401).json('Not authorize to access this route'));
    }

    try {
        //Verify token
        console.log(token)
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded.id);
        req.user = await db.User.findByPk(decoded.id);
        next();
    } catch (err) {
        return next(res.status(401).json('Not authorize to access this route'));
    }
}
