import { useState } from 'react'
import MessageDropdown from '../messageDropdown/MessageDropdown'
import './HeaderComponent.css'
import SettingsActionModal from '../settingsActionModal/SettingsActionModal'

const ProfileMenu = () => {
  const [profileSettings, setProfileSettings] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [settingAction, setSettingAction] = useState(null)

  function profileSettingNoti () {
    setProfileSettings(!profileSettings)
  }

  function clickProfileHandler (settings) {
    setSettingAction(settings)
    setModalActive(true)
  }

  return (
    <>
      <div>{modalActive && <SettingsActionModal setModalActive={setModalActive} settingAction={settingAction} />} </div>
      <div onClick={() => profileSettingNoti()} className='message'>
        <img src='/img/avatar-img.svg' alt='avatar-img' />
        {profileSettings && (
          <MessageDropdown
            clickHandler={setProfileSettings}
            clickProfileHandler={clickProfileHandler}
            profileSettings={profileSettings}
            message='Your settings'
            btnName='See all notifications'
          />
        )}
      </div>
    </>
  )
}

export default ProfileMenu
