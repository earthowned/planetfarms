import React from 'react'
import './profile-form-card.css'

const ProfileFormCard = ({
  data: {
    title,
    first_inputTitle,
    first_inputValue,
    second_inputTitle,
    second_inputValue,
    third_inputTitle,
    third_inputValue
  }
}) => {
  return (
    <div className='myProfile-container'>
      <h2 className='myProfile-container-row-title'>{title}</h2>
      <div className='myProfile-container-row'>
        <div className='form-group'>
          <label>{first_inputTitle}</label>
          <input value={first_inputValue} />
        </div>
        <div className='form-group'>
          <label>{second_inputTitle}</label>
          <input value={second_inputValue} />
        </div>
        {third_inputTitle && (
          <div className='form-group'>
            <label>{third_inputTitle}</label>
            <input value={third_inputValue} />
          </div>
        )}
      </div>
    </div>
  )
}

export const PersonalInformation = ({ user }) => {
  const PersonalInformationdata = {
    title: 'Personal information',
    first_inputTitle: 'First Name',
    first_inputValue: user?.firstName,
    second_inputTitle: 'Last Name',
    second_inputValue: user?.lastName,
    third_inputTitle: 'Date of birhday',
    third_inputValue: user && new Date(user.dateOfBirth).toDateString()
  }
  return (
    <>
      <ProfileFormCard data={PersonalInformationdata} />
    </>
  )
}

export const ContactInformation = ({ user }) => {
  const ContactInformationdatadata = {
    title: 'Contact information',
    first_inputTitle: 'Email',
    first_inputValue: user?.email,
    second_inputTitle: 'Phone',
    second_inputValue: user?.phone
  }
  return <ProfileFormCard data={ContactInformationdatadata} />
}

export const AdditionalInformation = ({ user }) => {
  const AdditionalInformationdata = {
    title: 'Additional information',
    first_inputTitle: 'Last login',
    first_inputValue: user?.lastLogin,
    second_inputTitle: 'Numbers of visits',
    second_inputValue: user?.numberOfVisits
  }
  return <ProfileFormCard data={AdditionalInformationdata} />
}
