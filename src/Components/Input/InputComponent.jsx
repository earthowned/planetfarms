import React from 'react'
import "./input-component.css";

const InputComponent = ({text, error, image, changeHandler, name, active}) => {
   
    return (
        <>
        <div className="input-container">
          <div className={`default-input ${error ? "user-error" : "border-1px-onyx"}`}>
                
                <div className="person-outline">
                {image && <img className="user-icon" src={image}  alt="person-outline" />}
                 
                </div>
                {/* <div className="frame-9"> */}
                {text ? <div className="text ibmplexsans-regular-normal-monsoon-14px">{name && name}</div> : <div>&nbsp;</div>}
                <input
                  type={name === "password" ? 'password' : name==="birthday" ? 'date' : name==="email" ? "email" : 'text'}
                  className="username ibmplexsans-regular-normal-monsoon-16px"
                  placeholder={name && name}
                  value={text}
                  onChange={(e) => changeHandler(e)}
                  id="userInput"
                />
              </div>
               {error && <p className="error-message">{name && name}</p>}  
              </div>
        </>
    )
}

export default InputComponent
