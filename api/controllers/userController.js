const generateToken = require('../utils/generateToken.js');
const User = require('../models/userModel.js');


// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, password } = req.body
    console.log(name, password)
    const userExists = await User.findOne({ where: { name } })

    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    const user = await User.create({
      name,
      password,
    })

    if (user) {
      console.log('idot', user.dataValues.id)
      res.status(201).json({
        id: user.dataValues.id,
        name: user.dataValues.name,
        token: generateToken(user.dataValues.id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }

  } catch (err) {
    throw new Error(`Error ${err}`)
  }
}


module.exports = registerUser
