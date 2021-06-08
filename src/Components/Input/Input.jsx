import React, { useState } from 'react'
import './input.scss'
import { ErrorMessage } from '@hookform/error-message'
import { ReactComponent as EyeCloseIcon } from '../../assets/images/eye-close-icon.svg'
import { ReactComponent as EyeOpenIcon } from '../../assets/images/eye-open-icon.svg'
const Input = React.forwardRef(
  (
    {
      image,
      name,
      value,
      placeholder,
      id,
      type,
      errors,
      togglePasswordVisibility,
      showPassword,
      children
    },
    ref
  ) => {
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
              {placeholder === 'Password' && (
                <div className='pwShowHide' onClick={togglePasswordVisibility}>
                  {showLabel && (
                    <span>
                      {showPassword ? (
                        <EyeOpenIcon className=' pwShowHide-show' />
                      ) : (
                        <EyeCloseIcon className=' pwShowHide-hide' />
                      )}
                    </span>
                  )}
                </div>
              )}
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
