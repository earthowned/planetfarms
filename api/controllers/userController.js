const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken.js');
const User = require('../models/userModel.js');


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body

  const userExists = await User.findOne({ name })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})


module.exports = registerUser;
