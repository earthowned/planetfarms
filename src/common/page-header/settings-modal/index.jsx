import { Divider } from "common/divider";
import { CommonModal } from "common/modal";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

export const SettingsModal = ({
  visible,
  onClose,
  onLogout,
  onChangePassword,
}) => {
  return (
    <CommonModal visible={visible} onClose={onClose} title="Your settings">
      <div className="settings-modal-container">
        <ActionButton
          icon="lock"
          title="Change password"
          onClick={onChangePassword}
          variant="transparent-white"
        />

        <Divider style={{ marginTop: "12px", marginBottom: "12px" }} />

        <ActionButton
          icon="logout"
          title="Logout"
          onClick={onLogout}
          variant="transparent-red"
        />
      </div>
    </CommonModal>
  );
};
