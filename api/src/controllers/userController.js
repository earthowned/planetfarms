const generateToken = require('../utils/generateToken.js')
const db = require('../models')
const Amplify = require('aws-amplify').Amplify
const Auth = require('aws-amplify').Auth

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
        scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: 'http://localhost:3000/',
        redirectSignOut: 'http://localhost:3000/',
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
    username = (process.env.AUTH_METHOD === 'cognito') 
    ? cognitoAuth(name, password) 
    : await localAuth(name, password, res);

    if (username) {
     return res.json({
        token: generateToken(username)
      })
    } else {
      return res.status(401).json({
        error: 'Invalid email or password'
      })
    }
  } catch (e) {
    console.log(e)
   return res.status(401).json({
      error: 'Invalid email or password'
    })
  }
}

localAuth = async (name, password, res) => {
  try {
    
  user = await db.User.findOne({ where: { name, password } })

  //transaction for autofollow communitites
  const result = await db.sequelize.transaction(async (t) => {
  const autoFollowCommunitiesId = await db.Community.findAll({
    where: {auto_follow: true},
    attributes: ['id']
  }, {transaction: t});

  const followedCommunities = await db.CommunityUser.findAll({
    where: {userId: user.dataValues.id},
    attributes: ['communityId']
  }, {transaction: t});

  //coverting to the arrays for removing item from first array
  const autoFollowCommunitiesArray = autoFollowCommunitiesId.map(item => item.id)
  const followedCommunitiesArray = followedCommunities.map(item => item.communityId)
  
  const idArrays = autoFollowCommunitiesArray.filter(item => {
                  return followedCommunitiesArray.indexOf(item) === -1;
                });
                
      const allFollow = [];
                 
    for (let i = 0; i < idArrays.length; i++) {
        const followObj = {
          userId: user.dataValues.id,
         communityId: parseInt(idArrays[i])
                  };
                  allFollow.push(followObj);
            }

  await db.CommunityUser.bulkCreate(allFollow, {transaction: t});
  return true

  })
  if(result){
    return user.dataValues.id;
  }
  } catch (error) {
    return res.json(error)
  }
}

cognitoAuth = async (name, password) => {
  user = await Auth.signIn(name, password)
  return (user) ? name : ''
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
      return res.json({user});
    } 
    registerLocal(name, password, email, res)
    
  } catch (err) {
    console.log(err)
    return res.json({err})
    // throw new Error(`Error ${err}`)
  }
}

registerLocal = async (name, password, email, res) => {
  try {
    const userExists = await db.User.findOne({ where: { name } })
  if (userExists) return res.json({ message: 'Users already Exists !!!' }).status(400)
  const user = await db.User.create({ name, password, email })
  if (user) {
    //transaction to auto_follow communities
     const result = await db.sequelize.transaction(async (t) => {
         const communitiesArray = await db.Community.findAll({
          attributes: ["id"],
          where: {auto_follow: true}}, 
           {transaction: t});
           
           const allFollow = [];

          for (let i = 0; i < communitiesArray.length; i++) {
            const followObj = {
              userId: user.dataValues.id,
              communityId: parseInt(communitiesArray[i].id)
            };
            allFollow.push(followObj);
          }

           await db.CommunityUser.bulkCreate(allFollow, {transaction: t});
          return true
        })

        if(result) {
          return res.status(201).json({
                  id: user.dataValues.id,
                  name: user.dataValues.name,
                  token: generateToken(user.dataValues.id)
                })
              } 
        }
   
          return res.status(400).json({
              error: 'Invalid user data'
            })
  } catch (error) {
    return res.json(error)
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

module.exports = { registerUser, authUser, changePassword, forgotPassword, forgotPasswordSubmit, resendCode, confirmSignUpWithCode }
