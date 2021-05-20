import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { confirmPin, logout } from '../../actions/userAction'
import './SettingsActionModel.css'

const SettingsActionModel = ({ setModalActive, setting, settingAction }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [inputErr, setInputErr] = useState(false)

  async function signOut () {
    setModalActive(false)
    try {
      await Auth.signOut()
      dispatch(logout())
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  async function changePassword () {
    dispatch(changePassword(input))
  }

  function handelConfirmPin () {
    dispatch(confirmPin(input))
  }

  async function forgotPassword (username) {
    Auth.forgotPassword(username)
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  const changeInput = (e) => {
    setInput(e.target.value)
    setInputErr(false)
  }

  function settingsOptions (setting) {
    switch (setting) {
      case 'logout':
        signOut()
        break
      case 'pin':
        handelConfirmPin()
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
          <p>{settingAction.inputText}</p>
          {settingAction.id === 'logout' ? (
            <></>
          ) : settingAction.id === 'changePassword' ? (
            <div className='input-container'>
              {[...Array(3)].map(() =>
                <div className={`default-input ${inputErr ? 'user-error' : 'border-1px-onyx'}`}>
                  <div className='input-content'>
                    <input
                      placeholder={settingAction.inputText}
                      className='username ibmplexsans-regular-normal-monsoon-16px'
                      onChange={(e) => changeInput(e)}
                      name='Code'
                      autoFocus='autoFocus'
                    />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className='input-container'>
              <div className={`default-input ${inputErr ? 'user-error' : 'border-1px-onyx'}`}>
                <div className='input-content'>
                  <input
                    placeholder={settingAction.inputText}
                    className='username ibmplexsans-regular-normal-monsoon-16px'
                    onChange={(e) => changeInput(e)}
                    name='Code'
                    autoFocus='autoFocus'
                  />
                </div>
              </div>
            </div>
          )}
          <p>{settingAction.message}</p>
          <div className='popup-btn-wrapper'>
            <button onClick={() => setModalActive(false)} className='secondary-btn'>
              Cancel
            </button>
            <button onClick={() => settingsOptions(settingAction.id)} className='default-btn'>
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingsActionModel
