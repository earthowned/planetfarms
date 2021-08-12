import PhoneInput from 'react-phone-number-input'

const PhoneNumber = ({ value, setValue }) => {
  return (
    <PhoneInput
      className='signInput'
      international
      defaultCountry='US'
      value={value}
      onChange={setValue}
    />
  )
}
export default PhoneNumber
