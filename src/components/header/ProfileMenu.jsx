import { useState } from "react";
import MessageDropdown from "../messageDropdown/MessageDropdown";
import "./HeaderComponent.css";
import SettingsActionModal from "../settingsActionModal/SettingsActionModal";

const ProfileMenu = () => {
  const [profileSettings, setProfileSettings] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [settingAction, setSettingAction] = useState(null);
  function clickProfileHandler(settings) {
    setSettingAction(settings);
    setModalActive(true);
  }
  return (
    <>
      <div>
        {modalActive && (
          <SettingsActionModal
            setModalActive={setModalActive}
            settingAction={settingAction}
          />
        )}{" "}
      </div>
      <div
        onClick={() => setProfileSettings(!profileSettings)}
        className="message"
      >
        <img src="/img/user.svg" alt="avatar-img" />
        {profileSettings && (
          <MessageDropdown
            clickHandler={setProfileSettings}
            clickProfileHandler={clickProfileHandler}
            profileSettings={profileSettings}
            message="Your settings"
            btnName="Go to settings"
          />
        )}
      </div>
    </>
  );
};

export default ProfileMenu;
