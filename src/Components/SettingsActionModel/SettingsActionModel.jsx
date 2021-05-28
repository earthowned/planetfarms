import { Auth } from 'aws-amplify'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  confirmPin,
  logout,
  confirmSignupWithCode,
  forgotPasswordRequest,
  forgotPasswordConform,
} from '../../actions/userAction'
import './SettingsActionModel.css'

const SettingsActionModel = ({ setModalActive, setting, settingAction }) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const [inputErr, setInputErr] = useState(false)
  const [forgotPasswordConformModal, setForgotPasswordConformModal] = useState(false)

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

  async function confirmSignup() {
    dispatch(confirmSignupWithCode(input))
  }

  async function forgotPasswordConformSubmit() {
    dispatch(forgotPasswordConform(input))
  }
  const changeInput = (e) => {
    setInput(e.target.value)
    setInputErr(false)
  }

  const passwordChange = (e) => {
    console.log(e.target.value)
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
      case 'confirmSignup':
        confirmSignup()
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
              {settingAction.form.map((form) => (
                  <InputFormNow form= {form} key={form.name} changeHandler={passwordChange} />
              ))}
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

function InputFormNow({form, inputErr, changeHandler}) {
  return(<>
  <p className='ibmplexsans-regular-normal-monsoon-16px'>{form.inputText}</p>
  <div className={`default-input ${inputErr ? 'user-error' : 'border-1px-onyx'}`}>
    <div className='input-content'>
      <input
        placeholder={form.name}
        className='username ibmplexsans-regular-normal-monsoon-16px'
        onChange={(e) => changeHandler(e)}
        autoFocus='autoFocus'
      />
    </div>
  </div>
</>)
}
