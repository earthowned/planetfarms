import ProfileFormCard from './ProfileFormCard'
import moment from 'moment'

const PersonalInformation = ({ user, isCurrentUser }) => {
  const PersonalInformationdata = {
    title: 'Personal information',
    firstTitle: 'First Name',
    firstValue: user?.firstName || 'N/A',
    secondTitle: 'Last Name',
    secondValue: user?.lastName || 'N/A',
    thirdTitle: 'Date of birthday',
    thirdValue: isCurrentUser
      ? (user?.dateOfBirth && moment.utc(new Date(user?.dateOfBirth)).format('ddd LL')) ||
        'N/A'
      : user?.dateOfBirth && moment.utc(new Date(user?.dateOfBirth)).format('ddd LL')
  }
  return (
    <>
      <ProfileFormCard data={PersonalInformationdata} />
    </>
  )
}

export default PersonalInformation
