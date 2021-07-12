const generateToken = require('../utils/generateToken.js')
const db = require('../models')
const Amplify = require('aws-amplify').Amplify
const Auth = require('aws-amplify').Auth
const Sequelize = require('sequelize')
// const User = require('../models/userModel.js')
// const LocalAuth = require('../models/localAuthModel.js')
const Op = Sequelize.Op

function amplifyConfig () {
  Amplify.configure({
    Auth: {
      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

      // REQUIRED - Amazon Cognito Region
      region: process.env.COGNITO_REGION,

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region
      // Required only if it's different from Amazon Cognito Region
      // identityPoolRegion: 'XX-XXXX-X',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: process.env.COGNITO_POOL_ID,

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: process.env.COGNITO_CLIENT_ID,

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: false,

      // OPTIONAL - Configuration for cookie storage
      // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
      /* cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
            sameSite: "strict" | "lax",
        // OPTIONAL - Cookie secure flag
        // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
            secure: true
        }, */

      // OPTIONAL - customized storage object
      // storage: MyStorage,

      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      authenticationFlowType: 'USER_PASSWORD_AUTH',

      // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
      // clientMetadata: { myCustomKey: 'myCustomValue' },

      // OPTIONAL - Hosted UI configuration
      oauth: {
        domain: process.env.COGNITO_DOMAIN_NAME, // domain_name
        scope: [
          'phone',
          'email',
          'profile',
          'openid',
          'aws.cognito.signin.user.admin'
        ],
        redirectSignIn: process.env.FRONTEND_URL,
        redirectSignOut: process.env.FRONTEND_URL,
        responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
      }
    }
  })
}

if (process.env.AUTH_METHOD === 'cognito') {
  amplifyConfig()
}

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await localAuth(name, password)
    if (user) {
      await res.json({
        token: generateToken(user.dataValues.userID),
        id: user.dataValues.userID
      })
    } else {
      await res.status(401).json({
        error: 'Please type correct email or password'
      })
    }
  } catch (e) {
    res.status(401).json({
      error: 'Please type correct email or password'
    })
  }
}

const localAuth = async (name, password) => {
  const user = await db.LocalAuth.findOne({ where: { username: name, password: password } })
  const newUser = await db.User.findOne({ where: { userID: { [Op.like]: user.dataValues.id.toString() } } })
  return newUser
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, password, id } = req.body
    if (process.env.AUTH_METHOD === 'cognito') {
      const user = await db.User.create({ userID: id, isLocalAuth: false, lastLogin: new Date(), numberOfVisit: 0 })
      if (user && subscribeCommunity(user)) {
        res.status(201).send('SUCCESS')
      }
    } else {
      registerLocal(name, password, res)
    }
  } catch (err) {
    res.status(409).json({ error: err.message })
  }
}

const registerLocal = async (name, password, res) => {
  try {
    const userExists = await db.LocalAuth.findOne({ where: { username: name } })
    if (userExists) { return res.json({ message: 'Users already Exists !!!' }).status(400) }

    const newUser = await db.sequelize.transaction(async (t) => {
      const user = await db.LocalAuth.create({ username: name, password: password }, { transaction: t })
      return await db.User.create({ userID: user.id, isLocalAuth: true, lastLogin: new Date(), numberOfVisit: 0 }, { transaction: t })
    })

    if (newUser && subscribeCommunity(newUser)) {
      res.status(201).json({
        id: newUser.dataValues.userID,
        userID: newUser.dataValues.userID,
        token: generateToken(newUser.dataValues.userID)
      })
    } else {
      res.status(400).json({
        error: 'Invalid user data'
      })
    }
  } catch (error) {
    res.json(error)
  }
}

const subscribeCommunity = async (user) => {
  try {
    return await db.sequelize.transaction(async (t) => {
      const communitiesArray = await db.Community.findAll({
        attributes: ['id'], where: { auto_follow: true }
      },
      { transaction: t })
      const allFollow = []
      for (let i = 0; i < communitiesArray.length; i++) {
        const followObj = {
          userId: user.dataValues.id,
          communityId: parseInt(communitiesArray[i].id)
        }
        allFollow.push(followObj)
      }
      await db.CommunityUser.bulkCreate(allFollow, { transaction: t })
      return true
    })
  } catch (error) {
    return false
  }
}

const changePassword = async (req, res) => {
  try {
    const { user, oldPassword, newPassword } = req.body
    let userWithNewPassword
    if (process.env.AUTH_METHOD === 'cognito') {
      const authUser = await Auth.currentAuthenticatedUser()
      userWithNewPassword = await Auth.changePassword(authUser, oldPassword, newPassword)
    } else {
      const oldUser = await db.User.findByPk(user.id)
      if (oldUser) {
        userWithNewPassword = await db.User.update({ password: newPassword }, { where: { id: user.id } })
      }
    }
    if (userWithNewPassword) {
      res.json({ message: 'Password Updated !!!' }).status(200)
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  } catch (e) {
    res.status(401)
    res.json({ error: e })
  }
}

const forgotPassword = async (req, res) => {
  // Send confirmation code to user's email
  const { username } = req.body
  Auth.forgotPassword(username)
    .then((CodeDeliveryDetails) => res.json({ details: CodeDeliveryDetails }).status(200))
    .catch((err) => console.log(err))
}

const forgotPasswordSubmit = async (req, res) => {
  // Send confirmation code to user's email
  const { username, code, newPassword } = req.body
  Auth.forgotPasswordSubmit(username, code, newPassword)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

const resendCode = async (req, res) => {
  const { username } = req.body
  try {
    await Auth.resendSignUp(username)
    res.json({ message: 'code resent successfully' }).status(200)
  } catch (err) {
    res.status(401)
    throw new Error('error resending code: ', err)
  }
}

const confirmSignUpWithCode = async (req, res) => {
  const { username, code } = req.body
  try {
    await Auth.confirmSignUp(username, code)
  } catch (error) {
    console.log('error confirming sign up', error)
  }
}

// @desc    Fetch all users
// @route   GET /api/users
// @access  Public
const getUsers = (req, res) => {
  db.User.findAll({})
    .then((users) => {
      res.json({ users }).status(200)
    })
    .catch((err) => res.json({ err }).status(400))
}

// @desc    Fetch single user for auth
// @route   GET /api/user/:id
// @access  Public
const getUserById = (req, res) => {
  const id = req.params.id
  db.LocalAuth.findByPk(id)
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

// @desc    Fetch single user profile details
// @route   GET /api/user/profile/:userID
// @access  Public
const getUserProfileByUserID = async (req, res) => {
  const id = req.params.userID
  await db.User.findOne({ where: { userID: id } })
    .then((profile) => {
      if (profile) {
        res.json(profile)
      } else {
        res.status(404)
        throw new Error('Profile not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Fetch logged user profile
// @route   GET /api/user/profile
// @access  Public
const getMyProfile = (req, res) => {
  const user = req.user
  console.log(user)
  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    email: user.email,
    dateOfBirth: user.dateOfBirth,
    lastLogin: user.lastLogin,
    numberOfVisit: user.numberOfVisit,
    attachments: user.attachments
  })
}

// @desc    Update user
// @route   PUT /api/users/:id
const updateUser = async (req, res) => {
  try {
    let attachment = ''
    if (req.file) {
      attachment = req.file.filename
    }
    const { email, firstName, lastName, phone, birthday } = req.body
    const id = req.user.dataValues.userID
    // const id = req.params.id
    db.User.findOne({ where: { userID: id } }).then((user) => {
      if (user) {
        db.User.update(
          { email, firstName, lastName, phone, dateOfBirth: birthday, attachments: attachment },
          { where: { userID: id } }
        )
          .then(() => res.status(200))
          .catch((err) => res.json({ error: err.message }).status(400))
      } else {
        res.status(404)
        throw new Error('User not found')
      }
    })
  } catch (err) {
    res.json({ error: err.message })
  }
}

// @desc    Search title
// @route   POST /api/resource/search
// @access  Private
const searchUserName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'
  db.User.findAll({ where: { name: { [Op.iLike]: '%' + name + '%' } }, order: [['title', order]] })
    .then((users) => res.json({ users }).status(200))
    .catch((err) => res.json({ error: err }).status(400))
}

module.exports = {
  registerUser,
  authUser,
  changePassword,
  forgotPassword,
  forgotPasswordSubmit,
  resendCode,
  confirmSignUpWithCode,
  getUserById,
  getUserProfileByUserID,
  getMyProfile,
  getUsers,
  updateUser,
  searchUserName
}
