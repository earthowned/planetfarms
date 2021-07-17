import React from 'react'
import './VerificationModal.scss'
import Verification from '../verification/Verification'

const VerificationModal = ({ type, clickHandler }) => {
  return (
    <div className='verification'>
      <div className='container'>
        {
          type === 'email'
            ? <Verification attr='email' title='Email Verification' clickHandler={clickHandler} />
            : type === 'phone'
              ? <Verification attr='phone_number' title='Phone Verification' clickHandler={clickHandler} /> : ''
        }
      </div>
    </div>
  )
}

export default React.memo(VerificationModal)
