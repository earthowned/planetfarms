import React from 'react'
import './MessageDropdown.css'
import { Link } from 'react-router-dom'

import MessageCard from '../messageCard/MessageCard'

const contacts = [
  {
    name: 'Bessie Cooper',
    img: '/img/avatar-img.svg',
    message: 'Hi there! Can you help with co..',
    date: '08/12/2020',
    notfication: 2
  },
  {
    name: 'Bessie Cooper',
    img: '/img/avatar-msg.svg',
    message: 'Hi there! Can you help with co..',
    date: '18/1/2020',
    notfication: 12
  },
  {
    name: 'Bessie Cooper',
    img: '/img/avatar-img.svg',
    message: 'Hi there! Can you help with co..',
    date: '08/8/2019',
    notfication: 5
  },
  {
    name: 'Bessie Cooper',
    img: '/img/avatar-msg.svg',
    message: 'Hi there! Can you help with co..',
    date: '08/4/2020'
  }
]
const settings = [
  {
    name: 'Logout',
    message: 'Do you want to logout?',
    id: 'logout',
    inputText: ''
  },
  {
    name: 'New PIN',
    message: 'Do you want to ask for new PIN?',
    id: 'pin',
    inputText: 'Please enter your User Name'
  },
  {
    name: 'Change Password',
    message: 'Do you want to Change Password?',
    id: 'changePassword',
    inputText: 'Please enter your User Old Password'
  },
  {
    name: 'Forgot Password',
    message: 'Did you forgot your password?',
    id: 'forgotPassword',
    inputText: 'Please enter your User Name'
  },
  {
    name: 'Confirm sign up',
    message: 'Do you want to confirm sign up by entering PIN?',
    id: 'confirmSignup',
    inputText: 'Please enter your PIN'
  }
]

const MessageDropdown = ({
  clickHandler,
  message,
  btnName,
  handleClick,
  mobileView,
  messageActive,
  notificationActive,
  profileSettings,
  clickProfileHandler
}) => {
  return (
    <>
      {!mobileView ? (
        <div className='message-dropdown'>
          <div className='message-dropdown-header'>
            <h4>{message}</h4>
            <div onClick={() => clickHandler(false)}>
              <img src='/img/close-outline.svg' alt='close-outline' />
            </div>
          </div>
          {profileSettings ? (
            settings.map((setting) => (
              <MessageCard
                contact={setting}
                clickProfileHandler={clickProfileHandler}
                profileSettings={profileSettings}
                key={setting.id}
              />
            ))
          ) : (
            <>
              {contacts.map((contact) => (
                <MessageCard contact={contact} />
              ))}
              <button onClick={() => handleClick()} className='messenger-btn-container secondary-btn'>
                {btnName}
              </button>{' '}
            </>
          )}
        </div>
      ) : (
        <div className={`message-dropdown-mobile ${messageActive && 'slide'} ${notificationActive && 'slide'}`}>
          <div className='message-dropdown-mobile-inner-container'>
            <div className='message-dropdown-mobile-header'>
              <h4>{message}</h4>
              <div className='close-btn' onClick={() => clickHandler(false)}>
                <img src='/img/close-outline.svg' alt='close-outline' />
              </div>
            </div>
            {contacts.map((contact) => (
              <MessageCard contact={contact} />
            ))}
            <Link
              to='/messenger'
              onClick={() => clickHandler(false)}
              className='mobile-btn messenger-btn-container secondary-btn nav-link'
            >
              {btnName}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default MessageDropdown
