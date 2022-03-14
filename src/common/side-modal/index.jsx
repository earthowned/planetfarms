import { Portal } from "react-portal";

import { IconButton } from "common/buttons/icon-button";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

export const SideModal = ({
  title,
  visible,
  onClose,
  children,
  actionTitle,
  onActionClick,
}) => {
  if (!visible) return null;

  return (
    <Portal node={document && document.getElementById("app-portal-container")}>
      <div className="side-modal-container">
        <div className="left-container" onClick={onClose} />

        <div className="side-container">
          <div className="top-container">
            <h3>{title}</h3>
            <IconButton icon="cross" onClick={onClose} variant="white" />
          </div>

          <div className="content-container">{children}</div>

          {actionTitle && onActionClick && (
            <div className="bottom-container">
              <ActionButton
                variant="primary"
                title={actionTitle}
                onClick={onActionClick}
              />
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};
