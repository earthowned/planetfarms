import { useRef } from 'react'
import './InputComponent.scss'

const types = {
  Password: 'password',
  birthday: 'date',
  'Choose date': 'date',
  email: 'email',
  'Start time': 'time'
}

function getType (getName) {
  for (const type in types) {
    if (type === getName) {
      return types[type]
    }
  }
  return 'text'
}

const InputComponent = ({ text, error, image, changeHandler, name, autoFocus }) => {
  const userInput = useRef()
  return (
    <>
      <div className='input-container'>
        <div className={`default-input ${error ? 'user-error' : 'border-1px-onyx'}`}>
          {image && (<div className='person-outline'>
            <img className='user-icon' src={image} alt='person-outline' />
          </div>)}
          {/* <div className="frame-9"> */}
          <div className='input-content'>
            {text ? <div className='overhead-text'>{name && name}</div> : <div>&nbsp;</div>}
            <input
              ref={userInput}
              type={getType(name)}
              className='username ibmplexsans-regular-normal-monsoon-16px'
              placeholder={name && name}
              value={text}
              onChange={(e) => changeHandler(e.target.value)}
              id='userInput'
              autoFocus={autoFocus === 'autoFocus'}
            />
          </div>
        </div>
        <p className='error-message'>{error ? name && name : ' '} </p>
      </div>
    </>
  )
}

export default InputComponent
