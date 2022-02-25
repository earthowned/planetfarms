import { Avatar } from "common/avatar";
import { Divider } from "common/divider";
import { ActionButton } from "common/buttons/action-button";

export const renderComponent = ({ onClick }) => {
  return <Avatar placeholderIcon="person" onClick={onClick} />;
};

export const renderContent = ({ onLogout, onChangePassword }) => {
  return (
    <div className="settings-modal-header-container">
      <ActionButton
        icon="lock"
        title="Change Password"
        onClick={onChangePassword}
        variant="transparent-white"
      />

      <Divider marginTop="12px" marginBottom="12px" />

      <ActionButton
        icon="logout"
        title="Logout"
        onClick={onLogout}
        variant="transparent-red"
      />
    </div>
  );
};
