import React from 'react'
import './input-component.css'
import { ErrorMessage } from '@hookform/error-message'

const Input = React.forwardRef(
  (
    {
      image,
      name,
      value,
      placeholder,
      autoFocus,
      id,
      type,
      errors,
      show,
      eventHandlers
    },
    ref
  ) => {
    return (
      <>
        <div className='input-container'>
          <div className='default-input'>
            {image && (
              <div className='person-outline'>
                <img className='user-icon' src={image} alt='person-outline' />
              </div>
            )}
            <div className='input-content'>
              {show && <div className='overhead-text'>{placeholder}</div>}
              <input
                className='username ibmplexsans-regular-normal-monsoon-16px'
                placeholder={placeholder}
                value={value}
                autoFocus={autoFocus === 'autoFocus' && true}
                name={name}
                id={id}
                ref={ref}
                type={type}
                {...eventHandlers}
              />
            </div>
          </div>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className='error-message'>{message}</p>}
          />
        </div>
      </>
    )
  }
)

export default Input
