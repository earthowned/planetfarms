import React,{useState} from "react";
import "./style.css";
import Logo from "../../components/Logo/Logo";
import {useHistory} from 'react-router-dom';
import {useDropzone} from 'react-dropzone';

function App() {
  return <CongratulationScreen {...X0220SignUpfiledData} />;
}

export default App;


function CongratulationScreen(props) {
  const {
    welcomeBack,
    welcomeBack2,
    xcontinue,
    text4,
  } = props;

const [firstname, setFirstname] = useState('');  
const [email, setEmail] = useState('');  
const [lastname, setLastname] = useState('');  
const [birthday, setBirthday] = useState('');  
const [phone, setPhone] = useState('');  


const [firstnameError, setFirstnameError] = useState('');  
const [emailError, setEmailError] = useState('');  
const [lastnameError, setLastnameError] = useState('');  
const [birthdayError, setBirthdayError] = useState('');  
const [phoneError, setPhoneError] = useState('');  

const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

let history = useHistory();

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
  setPhoneError(false);
}
const changeBirthday = (e) => {
  setBirthday(e.target.value)
  setBirthdayError(false);
}

const submitForm = () => {
  
  if(!firstname) setFirstnameError(true);

  if(!lastname) setLastnameError(true);

  if(!phone) setPhoneError(true);

  if(!birthday) setBirthdayError(true);

  if(!email) setEmailError(true);

  if(firstname && lastname && phone && birthday && email) {
    history.push('/dashboard')
  }

}

  return (
    <div className="x02-2-0-sign-up-filed">
      <div className="icons">
         <Logo />
      </div>

      <div className="congratulation-container">
        <div className="flex-col">
          <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">{welcomeBack}</h1>
          <p className="welcome-back-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">{welcomeBack2}</p>
          
          <div className="x-container">
            <div className={`input-container ${firstnameError ? "error" : "border-1px-onyx"}`}>
              <div className="frame-9">
                {firstname ? (<div className="first-name ibmplexsans-regular-normal-monsoon-14px">First Name</div>) : <div>&nbsp;</div>}
                <input value={firstname} 
                onChange={(e) => changeFirstname(e)}
                placeholder="First Name"
                className="input mikhail ibmplexsans-regular-normal-quarter-spanish-white-16px"></input>
              </div>
            </div>
          </div>
          
          <div className="x-container">
            <div className={`input-container ${emailError ? "error" : "border-1px-onyx"}`}>
              <div className="frame-9-1">
                {email ? <div className="email ibmplexsans-regular-normal-monsoon-14px">email</div> : <div>&nbsp;</div>}
                <input 
                placeholder="email"
                value={email}
                onChange={(e) => changeEmail(e)}
                className="input text-1 ibmplexsans-regular-normal-quarter-spanish-white-16px"></input>
              </div>
            </div>
          </div>
          <div className="x-container">
            <div className={`input-container ${birthdayError ? "error" : "border-1px-onyx"}`}>
              <div className="frame-9-2">
                {birthday ? <div className="birthday ibmplexsans-regular-normal-monsoon-14px">birthday</div> : <div>&nbsp;</div>}
                <input 
                placeholder="Birthday"
                type="date"
                value={birthday}
                onChange={(e) => changeBirthday(e)}
                className="input phone ibmplexsans-regular-normal-quarter-spanish-white-16px"></input>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <button onClick={() => history.push('/dashboard')} className="btn frame-4 border-0-5px-quarter-spanish-white">
              <div className="default-i905507538 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
                Skip for now
              </div>
            </button>
            <button onClick={() => submitForm()} className="btn frame-1935">
              <div className="continue valign-text-middle ibmplexsans-semi-bold-shark-16px">Continue</div>
            </button>
          </div>

        </div>
        <div className="flex-col-1">
          <div className="last-name-container">
            <div className={`input-container ${lastnameError ? "error" : "border-1px-onyx"}`}>
              <div className="frame-9-3">
                {lastname ? <div className="last-name ibmplexsans-regular-normal-monsoon-14px">Last Name</div> : <div>&nbsp;</div>}
                <input 
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => changeLastname(e)}
                className="input ugrymov ibmplexsans-regular-normal-quarter-spanish-white-16px"></input>
              </div>
            </div>
          </div>
          <div className="x-container">
            <div className={`input-container ${phoneError ? "error" : "border-1px-onyx"}`}>
              <div className="frame-9-4">
                {phone ? <div className="text-2 ibmplexsans-regular-normal-monsoon-14px">Phone No.</div> : <div>&nbsp;</div>}
                <input 
                placeholder="Phone No."
                value={phone}
                onChange={(e) => changePhone(e)}
                className="input text-3 ibmplexsans-regular-normal-quarter-spanish-white-16px"></input>
              </div>
            </div>
          </div>
        </div>
       
        {/* <div className="file-drop-container border-1px-quarter-spanish-white">
          <p className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text4}</p>
        </div> */}

        <div className="file-drop-container border-1px-quarter-spanish-white" {...getRootProps()}>
          <input {...getInputProps()} />
         {files.length > 0 ? <img className="avatar" src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"/> : <p className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">Drag &amp; Drop files in this area or <span className="file-upload">Click Here to attach</span></p>}
        </div>

      </div>
    </div>
  );
}


function Frame4(props) {
  const { children } = props;

  return (
    <div className="frame-4 border-0-5px-quarter-spanish-white">
      <div className="default-i905507538 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">
        {children}
      </div>
    </div>
  );
}
const frame4Data = {
    children: "Skip for now",
};

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
    frame4Props: frame4Data,
};

