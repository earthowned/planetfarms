import React from 'react'

export const InputFields = React.forwardRef(
  ({ type, placeholder, onChange, className, name, value }, ref) => {
    return (
      <>
        <input
          className={className}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          value={value}
          ref={ref}
        />
      </>
    )
  }
)

export const SelectFields = (props) => {
  return (
    <>
      <select className={props.className} onChange={props.onChange}>
        {props.option.map((x, index) => (
          <option key={index} value={x}>
            {x}
          </option>
        ))}
      </select>
    </>
  )
}

export const ErrorText = ({ className, message }) => {
  return (
    <>
      <p className={className}>{message}</p>
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

export const TextArea = React.forwardRef(
  ({ className, placeholder, name, rows, cols }, ref) => {
    return (
      <>
        <textarea
          className={className}
          placeholder={placeholder}
          cols={cols}
          rows={rows}
          name={name}
          ref={ref}
        />
      </>
    )
  }
)
