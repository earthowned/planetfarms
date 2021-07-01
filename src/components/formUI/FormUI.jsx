import React, {useState} from 'react';
import { ErrorMessage } from '@hookform/error-message'

export const InputFields = React.forwardRef(({
  name,
  value,
  placeholder,
  id,
  type,
  errors,
  defaultValue,
},
  ref
) => {
  const [showLabel, setShowLabel] = useState('')
  return (
    <div className="input-container">
        <div className={errors?.[`${name}`]?.message ? 'block block-error' : 'block'}>
            {showLabel && (
              <p className="label label-left">
                {placeholder}
              </p>
            )}
        <div className="field">
      <input
        className="inputField"
        name={name}
        type={type}
        id={id}
        ref={ref}
        onChange={(e) => setShowLabel(e.target.value)}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
      />
      </div>
      </div>
       {errors?.[`${name}`] &&
            <p className='error-message'>
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => <span>{message}</span>}
              />
            </p>}
    </div>
  )
}) 

export const SelectFields =  React.forwardRef(({
  name,
  errors,
  onChange,
  option,
},
  ref
) => {
   return (
    <div className="input-container">
      <select name={name} ref={ref} className="default-input-variation" onChange={onChange}>
        {option.map((x) => (
          <>
          {(x ==="Select Category") 
          ? <option value="" disabled selected hidden>Select Category</option>
          : <option value={x}>{x}</option>
          }
          </>
        ))}
      </select>
    </div>
  )
}
)

export const ErrorText = (props) => {
  return (
    <>
      <p className={props.className}>
        {props.error ? `Please enter ${props.message}` : ''}
      </p>
    </>
  )
}

export const SubmitButton = (props) => {
  return (
    <>
      <button className={props.className} onClick={props.onClick}>
        {props.title}
      </button>
    </>
  )
}

export const TextArea = (props) => {
  return (
    <>
      <textarea
        className={props.className}
        placeholder={props.placeholder}
        cols='3'
        rows='3'
        value={props.value}
        onChange={props.onChange}
      />
    </>
  )
}
