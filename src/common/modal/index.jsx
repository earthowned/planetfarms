import React from "react";
import { Portal } from "react-portal";

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

export const MobileMenuModal = ({ visible, children, modalRef }) => {
  if (!visible) return null;

  return (
    <Portal node={document && document.getElementById("app-portal-container")}>
      <div ref={modalRef} className="portal-mobile-modal-container">
        {children}
      </div>
    </Portal>
  );
};
