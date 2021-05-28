import React,{useState} from "react"
import "./congratulation-screen.css"
import Logo from "../../Components/Logo/Logo"
import {useHistory, useLocation} from 'react-router-dom'
import InputComponent from '../../Components/Input/InputComponent'
import Button from '../../Components/Button/Button'
import { Auth } from 'aws-amplify'
import ConfirmModal from '../../Components/SimpleModal/ConfirmModal'
import Secondarybtn from "../../Components/SecondaryBtn/Secondarybtn"
import DragDrop from '../../Components/DragDrop/DragDrop'

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
      }
    })
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

    {modalActive && <ConfirmModal username={ username } password={ password } />}

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

        <div className="congratulation-row">
          <div className="button-wrapper">
                <div className="congrats-btn">
                <Secondarybtn name="Skip for now" clickHandler={() => history.push('/community-page-news')} />
                </div>
                <div className="congrats-btn">
                <Button clickHandler={submitForm} name="Continue" />
                </div>
          </div>
         </div>

          </div>
          <DragDrop />
       
       </div>

       

      </form>
  )
}

export default CongratulationScreen;

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

