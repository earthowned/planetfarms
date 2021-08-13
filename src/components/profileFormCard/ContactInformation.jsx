import ProfileFormCard from './ProfileFormCard'

const ContactInformation = ({ user, verification, isCurrentUser }) => {
  const ContactInformationdatadata = {
    title: 'Contact information',
    firstTitle: 'Email',
    firstValue: isCurrentUser ? user?.email || 'N/A' : user?.email,
    firstVerify:
      user?.email && process.env.REACT_APP_AUTH_METHOD === 'cognito'
        ? {
            isVerified: user?.emailVerified,
            clickHandler: verification?.emailClickHandler
          }
        : null,
    secondTitle: 'Phone',
    secondValue: isCurrentUser ? user?.phone || 'N/A' : user?.phone,
    secondVerify:
      user?.phone && process.env.REACT_APP_AUTH_METHOD === 'cognito'
        ? {
            isVerified: user?.phoneVerified,
            clickHandler: verification?.phoneClickHandler
          }
        : null
  }

  return (
    <ProfileFormCard
      data={ContactInformationdatadata}
      isCurrentUser={isCurrentUser}
    />
  )
}

export default ContactInformation
