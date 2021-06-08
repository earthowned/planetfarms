import React, { useState } from 'react'
import './input.scss'
import { ErrorMessage } from '@hookform/error-message'

const Input = React.forwardRef(
  ({ image, name, value, placeholder, id, type, errors, children }, ref) => {
    const [showLabel, setShowLabel] = useState('')

    return (
      <>
        <div className='input-container'>
          <div
            className={
              errors?.[`${name}`]?.message ? 'block block-error' : 'block'
            }
          >
            {showLabel && <p className='label'>{placeholder}</p>}
            <div className='field'>
              <div
                className={
                  errors?.[`${name}`]?.message ? 'icon icon-error' : 'icon '
                }
              >
                {children}
              </div>
              <input
                className='inputField'
                placeholder={placeholder}
                value={value}
                name={name}
                id={id}
                ref={ref}
                type={type}
                onChange={(e) => setShowLabel(e.target.value)}
              />
            </div>
          </div>
          <p className='error-message'>
            <ErrorMessage
              errors={errors}
              name={name}
              render={({ message }) => <span>{message}</span>}
            />
          </p>
        </div>
      </>
    )
  }
)

export default Input
