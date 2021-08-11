import PhoneNumber from './PhoneNumber'
import { ReactComponent as UserAvatar } from '../../assets/images/user-green-outline.svg'
import { ReactComponent as Email } from '../../assets/images/email.svg'

const Icon = ({ checkType, inputVal, setInputVal }) => {
  return (
    <>
      {checkType === 'email' ? (
        <Email />
      ) : checkType === 'number' ? (
        <PhoneNumber value={inputVal} setValue={setInputVal} />
      ) : (
        <UserAvatar />
      )}
    </>
  )
}

export default Icon
