import React from 'react'
import './Button.scss'
import ComponentLoadingWrapper from '../loadingWrapper/ComponentLoadingWrapper'

const Button = ({ name, onClick, disabled = false, className, loadingState }) => {
  return (
    <div className='btn-container'>
      <button
        type='submit'
        className={`btn-default ${className}`}
        onClick={onClick}
        disabled={disabled}
      >
        {name}
      </button>
      <ComponentLoadingWrapper loadingState={loadingState} />
    </div>
  )
}

export default Button
