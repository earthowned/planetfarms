import PhoneInput from 'react-phone-number-input'

const PhoneNumber = ({ value, setValue }) => {
  return (
    <PhoneInput
      international
      defaultCountry='US'
      value={value}
      onChange={setValue}
    />
  )
}
export default PhoneNumber
