import { useState, useEffect } from 'react'

const useCheckInputType = (inputVal) => {
  const [checkType, setCheckType] = useState('')

  useEffect(() => {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
    regexEmail.test(inputVal)
      ? setCheckType('email')
      : regexNumber.test(inputVal)
        ? setCheckType('number')
        : setCheckType('username')
  }, [inputVal])

  const inputPlaceholder =
    checkType === 'email'
      ? 'Email'
      : checkType === 'number'
        ? 'Phone Number'
        : 'Username'

  return { checkType, inputPlaceholder }
}

export default useCheckInputType
