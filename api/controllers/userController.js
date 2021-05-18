const generateToken = require('../utils/generateToken.js')
const User = require('../models/userModel.js')
const Amplify = require('aws-amplify').Amplify
const Auth = require('aws-amplify').Auth

function amplifyConfig() {
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
        scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: 'http://localhost:3000/',
        redirectSignOut: 'http://localhost:3000/',
        responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
      }
    }
  })
}

if (process.env.AUTH_METHOD == 'cognito') {
  amplifyConfig()
}

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = async (req, res) => {
  try {
    const { name, password } = req.body
    let user, username
    if (process.env.AUTH_METHOD == 'cognito') {
      user = await Auth.signIn(name, password)
      if (user) {
        username = name
      }
    } else {
      user = await User.findOne({ where: { name, password } })
      if (user) {
        username = user.dataValues.id
      }
    }
    if (username) {
      res.json({
        /* id: user.dataValues.id,
        name: user.dataValues.name, */
        token: generateToken(username)
      })
    } else {
      res.status(401)
      throw new Error('Invalid email or password')
    }
  } catch (e) {
    console.log(e)
    res.status(401)
    res.json({
      /* id: user.dataValues.id,
      name: user.dataValues.name, */
      error: 'Invalid email or password'
    })
  }
}

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { name, password, email } = req.body
    let user
    if (process.env.AUTH_METHOD === 'cognito') {
      user = await Auth.signUp({
        username: name,
        password,
        attributes: {
          email
        }
      })
    } else {
      const userExists = await User.findOne({ where: { name } })
      if (userExists) res.json({ message: 'Users already Exists !!!' }).status(400)
      user = await User.create({ name, password })
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
    }
  } catch (err) {
    console.log(err)
    throw new Error(`Error ${err}`)
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
      const oldUser = await User.findByPk(user.id)
      if (oldUser) {
        userWithNewPassword = await User.update({ password: newPassword }, { where: { id: user.id } })
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
  const { username, code, new_password } = req.body

  Auth.forgotPasswordSubmit(username, code, new_password)
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

module.exports = { registerUser, authUser, changePassword, forgotPassword, forgotPasswordSubmit, resendCode }
