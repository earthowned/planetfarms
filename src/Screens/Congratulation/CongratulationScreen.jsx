import React, { useState } from 'react'
import './congratulation-screen.css'
import Logo from '../../Components/Logo/Logo'
import { useHistory, useLocation } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import InputComponent from '../../Components/Input/InputComponent'
import Button from '../../Components/Button/Button'
import { Auth } from 'aws-amplify'
import ConfirmModal from '../../Components/SimpleModal/ConfirmModal'
import Secondarybtn from '../../Components/SecondaryBtn/Secondarybtn'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../actions/userAction'

function CongratulationScreen() {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const username = location?.state?.username
  const password = location?.state?.password
  const editInformations = location?.state?.editInformations

  const welcomeBack = editInformations ? 'Edit Information' : 'Congratulations!'
  const welcomeBack2 = 'Please fill these fields to communicate with other people easier:'

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [phone, setPhone] = useState('')

  const [firstNameError, setFirstNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [birthdayError, setBirthdayError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [files, setFiles] = useState([])
  const [modalActive, setModalActive] = useState(false)

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  async function signUp() {
    try {
      const user = await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      })
      setModalActive(true)
    } catch (error) {
      console.log('error signing up:', error)
    }
  }

  const changeFirstName = (e) => {
    setFirstName(e.target.value)
    setFirstNameError(false)
  }
  const changeLastName = (e) => {
    setLastName(e.target.value)
    setLastNameError(false)
  }
  const changeEmail = (e) => {
    setEmail(e.target.value)
    setEmailError(false)
  }
  const changePhone = (e) => {
    setPhone(e.target.value)
    setPhoneError(false)
  }
  const changeBirthday = (e) => {
    setBirthday(e.target.value)
    setBirthdayError(false)
  }

  const submitForm = (e) => {
    e.preventDefault()
    if (!firstName) setFirstNameError(true)
    if (!lastName) setLastNameError(true)
    if (!phone) setPhoneError(true)
    if (!birthday) setBirthdayError(true)
    if (!email) setEmailError(true)
    if (firstName && lastName && phone && birthday && email) {
      if (process.env.REACT_APP_AUTH_METHOD !== 'cognito') {
        dispatch(updateUser({ firstName, lastName, phone, birthday, email, id: userInfo.id }))
        history.goBack()
        return
      }
      signUp()
    }
  }

  return (
    <form className='x02-2-0-sign-up-filed'>
      <div className='icons'>
        <Logo />
      </div>

      <div className='congratulation-header-wrapper'>
        <h1 className='congratulation-header'>{welcomeBack}</h1>
        <p className='congratulation-sub-title'>{!editInformations && welcomeBack2}</p>
      </div>

      {modalActive && <ConfirmModal username={username} password={password} />}

      <div className='congratulation-container'>
        <div className='congratulation-col-1'>
          <div className='congratulation-row'>
            <div className='row-1-col'>
              <InputComponent
                text={firstName}
                error={firstNameError}
                changeHandler={changeFirstName}
                name='firstName'
                autoFocus='autoFocus'
              />
            </div>

            <div className='row-1-col'>
              <InputComponent text={lastName} error={lastNameError} changeHandler={changeLastName} name='lastName' />
            </div>
          </div>

          <div className='congratulation-row'>
            <div className='row-1-col'>
              <InputComponent text={email} error={emailError} changeHandler={changeEmail} name='email' />
            </div>

            <div className='row-1-col'>
              <InputComponent text={phone} error={phoneError} changeHandler={changePhone} name='phone' />
            </div>
          </div>

          <div className='congratulation-row'>
            <div className='row-1-col'>
              <InputComponent text={birthday} error={birthdayError} changeHandler={changeBirthday} name='birthday' />
            </div>
          </div>

          <div className='congratulation-row'>
            <div className='button-wrapper'>
              <div className='congrats-btn'>
                {editInformations ? (
                  <Secondarybtn name='Cancel' clickHandler={() => history.goBack()} />
                ) : (
                  <Secondarybtn name='Skip for now' clickHandler={() => history.push('/community-page-news')} />
                )}
              </div>
              <div className='congrats-btn'>
                <Button clickHandler={submitForm} name='Continue' />
              </div>
            </div>
          </div>
        </div>
        <div className='congratulation-col-3'>
          <div className='file-drop-container border-1px-quarter-spanish-white' {...getRootProps()}>
            <input {...getInputProps()} />
            {files.length > 0 ? (
              <img className='avatar' src={files[0].preview} alt='files[0].preview' />
            ) : (
              <p className='text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                Drag &amp; Drop files in this area or <span className='file-upload'>Click Here to attach</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}

export default CongratulationScreen
