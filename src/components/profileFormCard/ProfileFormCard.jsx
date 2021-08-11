import ProfileInfo from './ProfileInfo'
import CheckCircle from '../../assets/images/check-circle.svg'
import MinusCircle from '../../assets/images/minus-circle-outline.svg'
import moment from 'moment'
import './ProfileFormCard.scss'

const ProfileFormCard = ({
  data: {
    title,
    firstTitle,
    firstValue,
    firstVerify,
    secondTitle,
    secondValue,
    secondVerify,
    thirdTitle,
    thirdValue,
    thirdVerify
  },
  isCurrentUser
}) => {
  return (
    <div className='myProfile-container'>
      <h2 className='myProfile-container-row-title'>{title}</h2>
      <div className='myProfile-container-row'>
        <ProfileInfo
          title={firstTitle}
          value={firstValue}
          verify={firstVerify}
          MinusCircle={MinusCircle}
          CheckCircle={CheckCircle}
          isCurrentUser={isCurrentUser}
        />
        {secondValue ? (
          <ProfileInfo
            title={secondTitle}
            value={secondValue}
            verify={secondVerify}
            MinusCircle={MinusCircle}
            CheckCircle={CheckCircle}
            isCurrentUser={isCurrentUser}
          />
        ) : (
          ''
        )}
        {thirdValue
          ? thirdTitle && (
            <ProfileInfo
              title={thirdTitle}
              value={thirdValue}
              verify={thirdVerify}
              MinusCircle={MinusCircle}
              CheckCircle={CheckCircle}
              isCurrentUser={isCurrentUser}
            />
            )
          : ''}
      </div>
    </div>
  )
}

export const PersonalInformation = ({ user }) => {
  const PersonalInformationdata = {
    title: 'Personal information',
    firstTitle: 'First Name',
    firstValue: user?.firstName || 'N/A',
    secondTitle: 'Last Name',
    secondValue: user?.lastName || 'N/A',
    thirdTitle: 'Date of birth',
    thirdValue: user?.dateOfBirth ? moment.utc(new Date(user?.dateOfBirth)).format('ddd LL') : 'N/A'
  }
  return (
    <>
      <ProfileFormCard data={PersonalInformationdata} />
    </>
  )
}

export const ContactInformation = ({ user, verification }) => {
  const ContactInformationdatadata = {
    title: 'Contact information',
    firstTitle: 'Email',
    firstValue: user?.email || 'N/A',
    firstVerify: user?.email && process.env.REACT_APP_AUTH_METHOD === 'cognito' ? {
      isVerified: user?.emailVerified,
      clickHandler: verification?.emailClickHandler
    } : null,
    secondTitle: 'Phone',
    secondValue: user?.phone || 'N/A',
    secondVerify: user?.phone && process.env.REACT_APP_AUTH_METHOD === 'cognito' ? {
      isVerified: user?.phoneVerified,
      clickHandler: verification?.phoneClickHandler
    } : null
  }
  return (
    <ProfileFormCard data={ContactInformationdatadata} />
  )
}

export const AdditionalInformation = ({ user }) => {
  const AdditionalInformationdata = {
    title: 'Additional information',
    firstTitle: 'Last login',
    firstValue: user?.lastLogin ? moment(user?.lastLogin).format('ddd LL') : 'N/A',
    secondTitle: 'Numbers of visits',
    secondValue: user?.numberOfVisit || 'N/A'
  }
  return (
    <ProfileFormCard data={AdditionalInformationdata} />
  )
}

export default ProfileFormCard