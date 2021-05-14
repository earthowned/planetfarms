import { Auth } from 'aws-amplify'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/userAction'

const SignOutModel = ({ setModalActive, setting }) => {
  const dispatch = useDispatch()

  async function signOut() {
    setModalActive(false)
    try {
      await Auth.signOut()
      dispatch(logout())
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  async function changePassword() {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        return Auth.changePassword(user, 'oldPassword', 'newPassword')
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  async function conformPin() {
    try {
      await Auth.signOut()
      dispatch(logout())
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  async function forgotPassword(username) {
    Auth.forgotPassword(username)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  function settingsOptions(setting) {
    switch (setting) {
      case 'logout':
        signOut()
        break
      case 'pin':
        conformPin()
        break
      case 'changePassword':
        changePassword()
        break
      case 'forgotPassword':
        forgotPassword()
        break
      default:
        console.log('no default')
    }
  }

  return (
    <>
      <div className='confirm-modal-container'>
        <button className='secondary-btn' onClick={() => settingsOptions(setting)}>
          {setting.message}
        </button>
      </div>
    </>
  )
}

export default SignOutModel
