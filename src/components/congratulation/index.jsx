import React from "react";
import "./style.css";

function App() {
  return <X0220SignUpfiled {...X0220SignUpfiledData} />;
}

export default App;


function X0220SignUpfiled(props) {
  const {
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    welcomeBack,
    welcomeBack2,
    firstName,
    mikhail,
    email,
    text1,
    birthday,
    phone,
    xcontinue,
    lastName,
    ugrymov,
    text2,
    text3,
    text4,
    frame4Props,
  } = props;

  return (
    <div className="x02-2-0-sign-up-filed">
      <div className="banner-images">
        <img className="vector" src="" />
        <img className="vector-1" src={vector2} />
        <img className="vector-2" src={vector3} />
        <img className="vector-1" src={vector4} />
        <img className="vector-2" src={vector5} />
        <img className="vector-2" src={vector6} />
      </div>
      <div className="congratulation-container">
        <div className="flex-col">
          <h1 className="welcome-back ibmplexsans-semi-bold-quarter-spanish-white-40px">{welcomeBack}</h1>
          <p className="welcome-back-1 ibmplexsans-semi-bold-quarter-spanish-white-16px">{welcomeBack2}</p>
          <div className="x-container">
            <div className="input-container border-1px-onyx">
              <div className="frame-9">
                <div className="first-name ibmplexsans-regular-normal-monsoon-14px">{firstName}</div>
                <div className="mikhail ibmplexsans-regular-normal-quarter-spanish-white-16px">{mikhail}</div>
              </div>
            </div>
          </div>
          <div className="x-container">
            <div className="input-container border-1px-onyx">
              <div className="frame-9-1">
                <div className="email ibmplexsans-regular-normal-monsoon-14px">{email}</div>
                <div className="text-1 ibmplexsans-regular-normal-quarter-spanish-white-16px">{text1}</div>
              </div>
            </div>
          </div>
          <div className="x-container">
            <div className="input-container border-1px-onyx">
              <div className="frame-9-2">
                <div className="birthday ibmplexsans-regular-normal-monsoon-14px">{birthday}</div>
                <div className="phone ibmplexsans-regular-normal-quarter-spanish-white-16px">{phone}</div>
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <Frame4>{frame4Props.children}</Frame4>
            <div className="frame-1935">
              <div className="continue valign-text-middle ibmplexsans-semi-bold-shark-16px">{xcontinue}</div>
            </div>
          </div>
        </div>
        <div className="flex-col-1">
          <div className="last-name-container">
            <div className="input-container border-1px-onyx">
              <div className="frame-9-3">
                <div className="last-name ibmplexsans-regular-normal-monsoon-14px">{lastName}</div>
                <div className="ugrymov ibmplexsans-regular-normal-quarter-spanish-white-16px">{ugrymov}</div>
              </div>
            </div>
          </div>
          <div className="x-container">
            <div className="input-container border-1px-onyx">
              <div className="frame-9-4">
                <div className="text-2 ibmplexsans-regular-normal-monsoon-14px">{text2}</div>
                <div className="text-3 ibmplexsans-regular-normal-quarter-spanish-white-16px">{text3}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="file-drop-container border-1px-quarter-spanish-white">
          <p className="text-4 valign-text-middle ibmplexsans-semi-bold-quarter-spanish-white-16px">{text4}</p>
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

