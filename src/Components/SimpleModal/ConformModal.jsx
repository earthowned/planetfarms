import React, { useState } from "react"
import InputComponent from '../Input/InputComponent'
import './conform-modal.css'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'

const ConformModal = ({ username, password }) => {
  const [code, setCode] = useState('')
  const [codeError, setCodeError] = useState('')
  let history = useHistory()

  const changeBirthday = (e) => {
    setCode(e.target.value)
    setCodeError(false)
  }
  
console.log(username, password)
  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code)
    } catch (error) {
        console.log('error confirming sign up', error)
    }
    try {
      const user = await Auth.signIn(username, password)
      console.log(user)
      history.push('/community-page-news')
    } catch (error) {
      console.log('error signing in', error)
    }
}
  return (
    <>
      <div className="conform-modal-container">
          <div className="conform-modal-inner-container">
          <h4>Please Enter your Conformation code</h4>
          <InputComponent
            text={code}
            error={codeError}
            image="/img/user-green-outline.svg"
            changeHandler={changeBirthday}
            name="Code"
            autoFocus="autoFocus"
          />
          <button className="secondary-btn" onClick={() => confirmSignUp()}>Conform</button>
          </div>
      </div>
    </>
  )
}

export default ConformModal
