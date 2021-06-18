import React from 'react'
import './Button.scss'

const Button = ({ name, clickHandler, onClick, disabled = false }) => {
  // function submitForm(e) {
  //   e.preventDefault();
  //   clickHandler();
  // }
  return (
    <button type='submit' className='btn-default' onClick={onClick} disabled={disabled}>
      {name}
    </button>
  )
}

export default Button
