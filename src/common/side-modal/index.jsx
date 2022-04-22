import { useMemo } from "react";
import { Portal } from "react-portal";

import { IconButton } from "common/buttons/icon-button";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

const actionBtnConfig = { variant: "primary", title: "", onClick: () => {} };

export const SideModal = ({
  title,
  visible,
  onClose,
  children,
  actionProps = undefined,
}) => {
  if (!visible) return null;

  const buttonProps = useMemo(() => {
    return { ...actionBtnConfig, ...(actionProps && actionProps) };
  }, [actionProps]);

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

          {actionProps && (
            <div className="bottom-container">
              <ActionButton {...buttonProps} />
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};
