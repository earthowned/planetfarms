import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/userAction'
import InputComponent from '../Input/InputComponent'
import './SettingsActionModel.css'

const SettingsActionModel = ({ setModalActive, setting, settingAction }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [inputErr, setInputErr] = useState(false)

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

  const changeInput = (e) => {
    setInput(e.target.value)
    setInputErr(false)
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
      <div className='settings-modal-container'>
        <div className='settings-modal-inner-container'>
          <h2>{settingAction.name}</h2>
          {settingAction.id !== 'logout' && (
            <InputComponent
              text={settingAction.name}
              error={settingAction.name}
              image='/img/user-green-outline.svg'
              changeHandler={changeInput}
              name='Code'
              autoFocus='autoFocus'
            />
          )}
          <p>{settingAction.message}</p>
          <div className='popup-btn-wrapper'>
            <button onClick={() => setModalActive(false)} className='secondary-btn'>
              Cancel
            </button>
            <button onClick={() => settingsOptions(settingAction.id)} className='default-btn'>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsActionModel
