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

    if(!token) {
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
