import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { confirmPin, logout } from '../../actions/userAction'
import './SettingsActionModal.css'

const SettingsActionModal = ({ setModalActive, setting, settingAction }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  async function signOut () {
    setModalActive(false)
    try {
      dispatch(logout())
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  async function changePassword () {
    dispatch(changePassword(input))
  }

  function handleConfirmPin () {
    dispatch(confirmPin(input))
  }

  async function forgotPassword (username) { }

  function settingsOptions (setting) {
    switch (setting) {
      case 'logout':
        signOut()
        break
      case 'pin':
        handleConfirmPin()
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
          <SettingInput settingAction={settingAction} setInput={setInput} />
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

const SettingInput = ({settingAction, setInput}) => {
  const [inputErr, setInputErr] = useState(false)
  const changeInput = (e) => {
    setInput(e.target.value)
    setInputErr(false)
  }
  return (
    <>
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
    </>
  )
}

export default SettingsActionModal
