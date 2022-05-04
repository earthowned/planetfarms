import React from "react";
import { Portal } from "react-portal";

import { IconButton } from "common/buttons/icon-button";

import "./styles.scss";

export const Modal = ({ visible, children, modalRef }) => {
  if (!visible) return null;

  return (
    <Portal node={document && document.getElementById("app-portal-container")}>
      <div ref={modalRef} className="portal-modal-container">
        {children}
      </div>
    </Portal>
  );
};

export const CommonModal = ({ visible, title, onClose, children }) => {
  if (!visible) return null;

  return (
    <Modal visible={visible}>
      <div className="common-modal-container">
        <div className="top-container">
          <h3>{title}</h3>
          <IconButton icon="cross" variant="white" onClick={onClose} />
        </div>
        {children}
      </div>
    </Modal>
  );
};
