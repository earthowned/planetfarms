export const InputFields = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={props.className}
        error={props.error}
        value={props.value}
      />
    </>
  )
}

export const SelectFields = (props) => {
  return (
    <>
      <select className={props.className} onChange={props.onChange}>
        <option>Select category</option>
        <option>{props.option1}</option>
        <option>{props.option2}</option>
      </select>
    </>
  )
}

export const ErrorText = (props) => {
  return (
    <>
      <p className={props.className}>
        {props.Error ? `Please enter ${props.message}` : ''}
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

export const File = (e) => (props) => {
  Object.assign(props.selectedFile, {
    preview: URL.createObjectURL(props.selectedFile)
  })
}
