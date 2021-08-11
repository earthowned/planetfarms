import ProfileFormCard from './ProfileFormCard'

export const PersonalInformation = ({ user, isCurrentUser }) => {
  const PersonalInformationdata = {
    title: 'Personal information',
    firstTitle: 'First Name',
    firstValue: user?.firstName || 'N/A',
    secondTitle: 'Last Name',
    secondValue: user?.lastName || 'N/A',
    thirdTitle: 'Date of birthday',
    thirdValue: isCurrentUser
      ? (user?.dateOfBirth && new Date(user?.dateOfBirth).toDateString()) ||
        'N/A'
      : user?.dateOfBirth && new Date(user?.dateOfBirth).toDateString()
  }
  return (
    <>
      <ProfileFormCard data={PersonalInformationdata} />
    </>
  )
}
