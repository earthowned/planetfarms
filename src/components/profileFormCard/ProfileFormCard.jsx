import React from 'react'
import './ProfileFormCard.scss'

const ProfileFormCard = ({ data: { title, first_inputTitle, first_inputValue, second_inputTitle, second_inputValue, third_inputTitle, third_inputValue } }) => {
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
        {third_inputTitle && <div className='form-group'>
          <label>{third_inputTitle}</label>
          <input value={third_inputValue} />
        </div>}
      </div>
    </div>
  )
}

export const PersonalInformation = () => {
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

export const ContactInformation = () => {
  const ContactInformationdatadata = {
    title: 'Contact information',
    firstInputTitle: 'Email',
    firstInputValue: user?.email,
    secondInputTitle: 'Phone',
    secondInputValue: user?.phone
  }
  return (
    <ProfileFormCard data={ContactInformationdatadata} />
  )
}

export const AdditionalInformation = () => {
  const AdditionalInformationdata = {
    title: 'Additional information',
    firstInputTitle: 'Last login',
    firstInputValue: user?.lastLogin,
    secondInputTitle: 'Numbers of visits',
    secondInputValue: user?.numberOfVisits
  }
  return (
    <ProfileFormCard data={AdditionalInformationdata} />
  )
}
