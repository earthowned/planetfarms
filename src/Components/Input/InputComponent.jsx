import {useRef} from 'react'
import "./input-component.css";

const InputComponent = ({text, error, image, changeHandler, name, autoFocus}) => {
   const userInput = useRef();

   
    return (
        <>
        <div className="input-container">
          <div className={`default-input ${error ? "user-error" : "border-1px-onyx"}`}>
                
                <div className="person-outline">
                {image && <img className="user-icon" src={image}  alt="person-outline" />}
                 
                </div>
                {/* <div className="frame-9"> */}
                {text ? <div className="text ibmplexsans-regular-normal-monsoon-14px">{name && name}</div> : <div>&nbsp;</div>}
                <input ref={userInput}
                  type={name === "Password" ? 'password' : name==="birthday" ? 'date' : name==="email" ? "email" : 'text'}
                  className="username ibmplexsans-regular-normal-monsoon-16px"
                  placeholder={name && name}
                  value={text}
                  onChange={(e) => changeHandler(e)}
                  id="userInput"
                  autoFocus = {autoFocus === "autoFocus" && true}
                />
              </div>
               <p className="error-message">{error ? name && name : " "} </p>
         </div>
        </>
    )
}

export default InputComponent
