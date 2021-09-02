const generateToken = require('../utils/generateToken.js')
const db = require('../models')
const Amplify = require('aws-amplify').Amplify
const Auth = require('aws-amplify').Auth
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { changeFormat } = require('../helpers/filehelpers')
const NotFoundError = require('../errors/notFoundError')

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
    if (user && (await subscribeCommunity(user, false))) {
      res.json({
        data: generateToken(user.dataValues.userID),
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
  const user = await db.LocalAuth.findOne({
    where: { username: name, password: password }
  })
  const newUser = await db.User.findOne({
    where: { userID: { [Op.like]: user.dataValues.id.toString() } }
  })
  return newUser
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, password, id } = req.body
    if (process.env.AUTH_METHOD === 'cognito') {
      const data = await db.User.findOne({ where: { userID: id } })
      if (!data) {
        const user = await db.User.create({
          userID: id,
          isLocalAuth: false,
          lastLogin: new Date(),
          numberOfVisit: 0
        })
        if (user && (await subscribeCommunity(user, true))) {
          res.status(201).send('SUCCESS')
        }
      } else {
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
    if (userExists) {
      return res.json({ message: 'Users already Exists !!!' }).status(400)
    }
    const newUser = await db.sequelize.transaction(async (t) => {
      const user = await db.LocalAuth.create(
        { username: name, password: password },
        { transaction: t }
      )
      return await db.User.create(
        {
          userID: user.id,
          isLocalAuth: true,
          lastLogin: new Date(),
          numberOfVisit: 0
        },
        { transaction: t }
      )
    })
    if (newUser && (await subscribeCommunity(newUser, true))) {
      res.status(201).json({
        id: newUser.dataValues.userID,
        userID: newUser.dataValues.userID,
        token: generateToken(newUser.dataValues.userID)
      })
    } else {
      res.status(400).json({ error: 'Invalid user data' })
    }
  } catch (error) {
    res.json(error)
  }
}

const subscribeCommunity = async (user, register) => {
  try {
    return await db.sequelize.transaction(async (t) => {
      const communitiesArray = await db.Community.findAll(
        {
          attributes: ['id'],
          where: { auto_follow: true }
        },
        { transaction: t }
      )
      const communityUser = await db.CommunityUser.findOne({
        where: { userId: user.dataValues.id }
      })
      const allFollow = []
      for (let i = 0; i < communitiesArray.length; i++) {
        const followObj = {
          userId: user.dataValues.id,
          communityId: parseInt(communitiesArray[i].id)
        }
        if (register) {
          allFollow.push(followObj)
        } else if (
          followObj.userId !== communityUser.dataValues.userId &&
          followObj.communityId !== communityUser.dataValues.communityId
        ) {
          allFollow.push(followObj)
        } else {
          return
        }
      }
      await db.CommunityUser.bulkCreate(allFollow)
      return true
    })
  } catch (error) {
    return false
  }
}

const sendTokenStatus = (req, res) => {
  res.status(201).json({ message: 'accepted' })
}

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  const userID = req.user.userID
  if (process.env.AUTH_METHOD !== 'cognito') {
    const oldUser = await db.LocalAuth.findByPk(userID)
    if (oldUser.dataValues.password === oldPassword) {
      await db.LocalAuth.update(
        { password: newPassword },
        { where: { id: userID } }
      ).then(() =>
        res.json({ message: 'The user password has been updated.' }).status(200)
      )
    } else {
      res.status(401).json({ message: 'Incorrect old password' })
    }
  }
}

const forgotPassword = async (req, res) => {
  // Send confirmation code to user's email
  const { username } = req.body
  Auth.forgotPassword(username)
    .then((CodeDeliveryDetails) =>
      res.json({ details: CodeDeliveryDetails }).status(200)
    )
    .catch((err) => console.log(err))
}

const forgotPasswordSubmit = async (req, res) => {
  // Send confirmation code to user's email
  const { username, code, newPassword } = req.body
  Auth.forgotPasswordSubmit(username, code, newPassword)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
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
      res.status(200).json({
        users: users.map((rec) => ({
          ...rec.dataValues,
          attachments: changeFormat(rec.dataValues.attachments)
        }))
      })
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
        throw new Error('User not found')
      }
    })
    .catch((err) => res.json({ error: err.message }).status(400))
}

// @desc    Fetch single user profile details
// @route   GET /api/user/profile/:userID
// @access  Public
const getUserProfileByUserID = async (req, res) => {
  try {
    const id = req.params.userID
    const profile = await db.User.findOne({
      where: { userID: id },
      attributes: {
        exclude: req.user.userID !== id ? ['phone', 'dateOfBirth'] : []
      }
    })
    if (!profile) throw new NotFoundError()
    res.status(200).json({
      status: true,
      message: 'fetched user profile successfully',
      results: {
        ...profile.dataValues,
        attachments: changeFormat(profile.dataValues.attachments)
      }
    })
  } catch (err) {
    res.json({ error: err.message }).status(400)
  }
}

// @desc    Fetch logged user profile
// @route   GET /api/user/profile
// @access  Public
const getMyProfile = async (req, res) => {
  const user = await req.user
  const profile = await db.User.findOne({
    where: { userID: user.userID },
    include: [{ model: db.Community, as: 'followers' }]
  })
  res.json({
    ...profile.dataValues,
    ...profile.followers,
    communities: profile.followers.length || 0,
    attachments: changeFormat(profile?.dataValues?.attachments)
  })
}

// @desc    Update user
// @route   PUT /api/users/:id
const updateUser = async (req, res) => {
  try {
    const attachments = req.file ? req.file.filename : req.user.attachments
    const id = req.user.dataValues.userID
    const { email, firstName, lastName, phone, birthday } = req.body
    db.User.findOne({ where: { userID: id } }).then((user) => {
      if (user) {
        db.User.update(
          {
            email,
            firstName,
            lastName,
            phone,
            dateOfBirth: birthday,
            attachments
          },
          { where: { userID: id } }
        )
          .then(() => res.sendStatus(200))
          .catch((err) => res.status(403).json({ error: err.message }))
      } else {
        res.status(404)
        throw new Error('User not found')
      }
    })
  } catch (err) {
    res.status(403).json({ error: err.message })
  }
}

// @desc    Search title
// @route   POST /api/resource/search
// @access  Private
const searchUserName = (req, res) => {
  const { name } = req.query
  const order = req.query.order || 'ASC'
  db.User.findAll({
    where: { name: { [Op.iLike]: '%' + name + '%' } },
    order: [['title', order]]
  })
    .then((users) => res.json({ users }).status(200))
    .catch((err) => res.json({ error: err }).status(400))
}

module.exports = {
  registerUser,
  authUser,
  changePassword,
  forgotPassword,
  forgotPasswordSubmit,
  confirmSignUpWithCode,
  getUserById,
  getUserProfileByUserID,
  getMyProfile,
  getUsers,
  updateUser,
  searchUserName,
  sendTokenStatus
}
