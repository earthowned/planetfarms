import React from 'react'
import './Button.scss'

const Button = ({ name, clickHandler, onClick }) => {
  // function submitForm(e) {
  //   e.preventDefault();
  //   clickHandler();
  // }
  return (
    <button type='submit' className='btn-default' onClick={onClick}>
      {name}
    </button>
  )
}

export default Button
