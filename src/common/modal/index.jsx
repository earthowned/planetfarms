import React from "react";
import cx from "classnames";
import { Portal } from "react-portal";

import "./styles.scss";

const ModalVariant = {
  "full-screen": "full-screen",
  "mobile-page": "mobile-page",
};

export const Modal = ({
  visible,
  children,
  modalRef,
  variant = ModalVariant["full-screen"],
}) => {
  if (!visible) return null;

  const modalClassName = cx("portal-modal-container", {
    [`portal-modal-container-${variant}`]: true,
  });

  return (
    <Portal node={document && document.getElementById("app-portal-container")}>
      <div ref={modalRef} className={modalClassName}>
        {children}
      </div>
    </Portal>
  );
};
