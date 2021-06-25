import { useState } from 'react'
import MessageDropdown from '../messageDropdown/MessageDropdown'
import './HeaderComponent.css'
import { useHistory } from 'react-router-dom'
import SettingsActionModal from '../settingsActionModal/SettingsActionModal'

const HeaderComponent = ({ title }) => {
  const [active, setActive] = useState(false)
  const [profileSettings, setProfileSettings] = useState(false)
  const [notification, setNotification] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [settingAction, setSettingAction] = useState(null)

  function messageNoti () {
    setActive(!active)
    setNotification(false)
  }

  function notificationNoti () {
    setNotification(!notification)
    setActive(false)
  }
  const history = useHistory()

  function handleClick () {
    history.push('/messenger')
  }

  function profileSettingNoti () {
    setProfileSettings(!profileSettings)
    setActive(false)
  }

  function clickProfileHandler (settings) {
    setSettingAction(settings)
    setModalActive(true)
  }

  return (
    <>
      <div>{modalActive && <SettingsActionModal setModalActive={setModalActive} settingAction={settingAction} />} </div>
      <header className='header-container'>
        <h3>{title}</h3>
        <ul>
          <li className="community-switch-btn" onClick={() => history.push('/community-switching/all-communities')}><button>Switch Community</button></li>
          <li style={{ cursor: 'pointer' }} onClick={() => history.push('/dashboard')}>
            <img src='/img/user-green-outline.svg' alt='user-green-outline' />
            <span>My dashboard</span>
          </li>
          <li onClick={() => messageNoti()} className='message'>
            <img src='/img/email.svg' alt='email-icon' />
            {active || <div className='message-noti'>6</div>}
            {active && (
              <MessageDropdown
                clickHandler={setActive}
                message='Your messages'
                btnName='See all messages'
                handleClick={handleClick}
              />
            )}
          </li>
          <li onClick={() => notificationNoti()} className='message'>
            <img src='/img/bell-icon.svg' alt='bell-icon' />
            {notification && (
              <MessageDropdown
                clickHandler={setNotification}
                message='Your Settings'
                btnName='See all notifications'
                handleClick={handleClick}
              />
            )}
          </li>
          <li onClick={() => profileSettingNoti()} className='message'>
            <img src='/img/avatar-img.svg' alt='avatar-img' />
            {profileSettings && (
              <MessageDropdown
                clickProfileHandler={clickProfileHandler}
                profileSettings={profileSettings}
                message='Your Settings'
                btnName='See all notifications'
              />
            )}
          </li>
        </ul>
      </header>
    </>
  )
}

export default HeaderComponent
