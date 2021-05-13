const generateToken = require('../utils/generateToken.js')
const User = require('../models/userModel.js')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await User.findOne({ where: { name, password } })
    if (user) {
      res.json({
        id: user.dataValues.id,
        name: user.dataValues.name,
        token: generateToken(user.dataValues.id)
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  } catch (e) {
    console.log(e)
  }
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, password } = req.body
    const userExists = await User.findOne({ where: { name } })
    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }
    const user = await User.create({ name, password })
    if (user) {
      res.status(201).json({
        id: user.dataValues.id,
        name: user.dataValues.name,
        token: generateToken(user.dataValues.id)
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  } catch (err) {
    throw new Error(`Error ${err}`)
  }
}

// @desc    Fetch all users
// @route   GET /api/users
// @access  Public
const getUsers = (req, res) => {
  User.findAll({})
    .then((users) => {
      res.json({ users }).status(200)
    })
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Fetch single user
// @route   GET /api/user/:id
// @access  Public
const getUserById = (req, res) => {
  const id = req.params.id

  User.findByPk(id)
    .then((user) => {
      if (user) {
        res.json(user)
      } else {
        res.status(404)
        throw new Error('User not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Update user
// @route   PUT /api/users/:id
const updateUser = async (req, res) => {
  const { email, firstName, lastName, phone, birthday, name } = req.body
  const id = req.params.id
  User.findByPk(id).then(user => {
    if (user) {
      User.update(
        {
          email,
          firstName,
          lastName,
          phone,
          dateOfBirth: birthday,
          name
        },
        { where: { id: user.dataValues.id } }
      )
        .then(() => res.json({ message: 'User Updated !!!' }).status(200))
        .catch((err) => res.json({ error: err.message }).status(400))
    }
    res.status(404)
    throw new Error('User not found')
  })
}

// @desc    Search name
// @route   POST /api/resource/search
// @access  Private
const searchUserName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'

  User.findAll({ where: { name: { [Op.iLike]: '%' + name + '%' } }, order: [['title', order]] })
    .then(users => res.json({ users }).status(200))
    .catch(err => res.json({ error: err }).status(400))
}

module.exports = { registerUser, authUser, getUsers, getUserById, updateUser, searchUserName }
