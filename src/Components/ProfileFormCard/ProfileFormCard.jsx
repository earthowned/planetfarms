import React from 'react'
import './profile-form-card.css'

const ProfileFormCard = ({
  data: {
    title,
    firstInputTitle,
    firstInputValue,
    secondInputTitle,
    secondInputValue,
    thirdInputTitle,
    thirdInputValue
  }
}) => {
  return (
    <div className='myProfile-container'>
      <h2 className='myProfile-container-row-title'>{title}</h2>
      <div className='myProfile-container-row'>
        <div className='form-group'>
          <label>{firstInputTitle}</label>
          <input value={firstInputValue} />
        </div>
        <div className='form-group'>
          <label>{secondInputTitle}</label>
          <input value={secondInputValue} />
        </div>
        {thirdInputTitle && (
          <div className='form-group'>
            <label>{thirdInputTitle}</label>
            <input value={thirdInputValue} />
          </div>
        )}
      </div>
    </div>
  )
}

export const PersonalInformation = ({ user }) => {
  const PersonalInformationdata = {
    title: 'Personal information',
    firstInputTitle: 'First Name',
    firstInputValue: user?.firstName,
    secondInputTitle: 'Last Name',
    secondInputValue: user?.lastName,
    thirdInputTitle: 'Date of birhday',
    thirdInputValue: user && new Date(user.dateOfBirth).toDateString()
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
    firstInputTitle: 'Email',
    firstInputValue: user?.email,
    secondInputTitle: 'Phone',
    secondInputValue: user?.phone
  }
  return <ProfileFormCard data={ContactInformationdatadata} />
}

export const AdditionalInformation = ({ user }) => {
  const AdditionalInformationdata = {
    title: 'Additional information',
    firstInputTitle: 'Last login',
    firstInputValue: user?.lastLogin,
    secondInputTitle: 'Numbers of visits',
    secondInputValue: user?.numberOfVisits
  }
  return <ProfileFormCard data={AdditionalInformationdata} />
}
