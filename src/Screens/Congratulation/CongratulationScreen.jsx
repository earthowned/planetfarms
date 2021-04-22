import React,{useState} from "react"
import "./congratulation-screen.css"
import Logo from "../../Components/Logo/Logo"
import {useHistory, useLocation} from 'react-router-dom'
import {useDropzone} from 'react-dropzone'
import InputComponent from '../../Components/Input/InputComponent'
import Button from '../../Components/Button/Button'
import { Auth } from 'aws-amplify'
import ConformModal from '../../Components/SimpleModal/ConformModal'

function CongratulationScreen() {
  const welcomeBack= "Congratulations!"
  const welcomeBack2= "Please fill these fields to communicate with other people easier:"

const [firstname, setFirstname] = useState('')
const [email, setEmail] = useState('')
const [lastname, setLastname] = useState('')
const [birthday, setBirthday] = useState('')
const [phone, setPhone] = useState('')

const [firstnameError, setFirstnameError] = useState('') 
const [emailError, setEmailError] = useState('')
const [lastnameError, setLastnameError] = useState('') 
const [birthdayError, setBirthdayError] = useState('') 
const [phoneError, setPhoneError] = useState('')
const [files, setFiles] = useState([])
const [modalActive, setModalActive] = useState(false)

const { getRootProps, getInputProps } = useDropzone({
  accept: "image/*",
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

let location = useLocation()
let history = useHistory()
const username = location?.state?.username
const password = location?.state?.password


async function signUp() {
  console.log(username, password,email, phone)
  try {
    const user = await Auth.signUp({
      username,
      password,
        attributes: {
          email,
          phone
      }
    })
    console.log(user)
    setModalActive(true)
  } catch (error) {
    console.log('error signing up:', error)
  }
}

const changeFirstname = (e) => {
  setFirstname(e.target.value)
  setFirstnameError(false);
}
const changeLastname = (e) => {
  setLastname(e.target.value)
  setLastnameError(false);
}
const changeEmail = (e) => {
  setEmail(e.target.value)
  setEmailError(false);
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
  if(!firstname) setFirstnameError(true)
  if(!lastname) setLastnameError(true)
  if(!phone) setPhoneError(true)
  if(!birthday) setBirthdayError(true)
  if(!email) setEmailError(true)
  if(firstname && lastname && phone && birthday && email) {
    signUp()
  }

}

  return (
    <form className="x02-2-0-sign-up-filed">
      <div className="icons">
         <Logo />
      </div>

    <div className="congratulation-header-wrapper">
        <h1 className="congratulation-header">{welcomeBack}</h1>
        <p className="congratulation-sub-title">{welcomeBack2}</p>
    </div>

    {modalActive && <ConformModal username={ username } password={ password } />}

      <div className="congratulation-container">
        
        <div className="congratulation-col-1">
          <div className="congratulation-row">
            <div className="row-1-col">
              <InputComponent text={firstname} 
               error={firstnameError} 
               changeHandler={changeFirstname}
               name="firstname"
               autoFocus="autoFocus"
               />
            </div>

            <div className="row-1-col">
               <InputComponent text={lastname} 
               error={lastnameError} 
               changeHandler={changeLastname}
               name="lastname"
               />
              </div>
            </div>

          <div className="congratulation-row">
            <div className="row-1-col">
            <InputComponent text={email} 
               error={emailError} 
               changeHandler={changeEmail}
               name="email"
               />
              </div>

          <div className="row-1-col">
            <InputComponent text={phone} 
               error={phoneError} 
               changeHandler={changePhone}
               name="phone"
               />
            </div>
          </div>

           
          <div className="congratulation-row">
            <div className="row-1-col">
            <InputComponent text={birthday} 
               error={birthdayError} 
               changeHandler={changeBirthday}
               name="birthday"
               />
            </div>
          </div>
          
          </div>
        
        <div className="congratulation-col-3">
          <div className="file-drop-container border-1px-quarter-spanish-white" {...getRootProps()}>
            <input {...getInputProps()} />
          {files.length > 0 ? <img className="avatar" src={files[0].preview} /> : <p className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">Drag &amp; Drop files in this area or <span className="file-upload">Click Here to attach</span></p>}
          </div>
        </div>
       
       </div>

       <div className="button-wrapper">
            <button onClick={() => history.push('/community-page-news')} className="btn frame-4 border-0-5px-quarter-spanish-white">
              <div className="default-i905507538 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                Skip for now
              </div>
            </button>
            
            <Button clickHandler={submitForm} name="Continue" />
      </div>

      </form>
  )
}

export default CongratulationScreen;

function Frame4(props) {
  const { children } = props

  return (
    <div className="frame-4 border-0-5px-quarter-spanish-white">
      <div className="default-i905507538 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
        {children}
      </div>
    </div>
  )
}
const frame4Data = {
    children: "Skip for now"
}

const X0220SignUpfiledData = {
    vector2: "",
    vector3: "",
    vector4: "",
    vector5: "",
    vector6: "",
    welcomeBack: "Congratulations!",
    welcomeBack2: "Please fill these fields to communicate with other people easier:",
    firstName: "First Name",
    mikhail: "Mikhail",
    email: "Email",
    text1: "misha_ugryumov123@gmail.com",
    birthday: "Birthday",
    phone: "08/23/1995",
    xcontinue: "Continue",
    lastName: "Last Name",
    ugrymov: "Ugrymov",
    text2: "Phone Number (optional)",
    text3: "+1 (987) 123-55-12",
    text4: "Drag & Drop files in this area or Click Here to attach",
    frame4Props: frame4Data
}

