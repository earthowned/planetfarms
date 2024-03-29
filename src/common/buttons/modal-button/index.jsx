import React, { useState, useEffect } from "react";

import { IconButton } from "common/buttons/icon-button";
import { ActionButton } from "common/buttons/action-button";

import "./styles.scss";

export const ModalButton = ({
  component,
  modalTitle,
  renderContent,
  width = "544px",
  height = "408px",
  actionButtonTitle,
  onActionButtonClick,
  position = { top: "40px", right: "-24px" },
}) => {
  const ref = React.useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      setIsVisible(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  const handleActionButtonClick = () => {
    onActionButtonClick();
    setIsVisible(false);
  };

  return (
    <div className="modal-icon-btn-container" ref={ref}>
      {component({ visible: isVisible, setVisible: setIsVisible })}

      {isVisible && (
        <div
          className="modal-container"
          style={{ width, maxHeight: height, ...position }}
        >
          <div className="header">
            <h3>{modalTitle}</h3>
            <IconButton
              icon="cross"
              variant="white"
              onClick={() => setIsVisible(false)}
            />
          </div>

          <div className="content">
            {renderContent({ visible: isVisible, setVisible: setIsVisible })}
          </div>

          {actionButtonTitle && onActionButtonClick && (
            <div className="footer">
              <ActionButton
                variant="secondary"
                title={actionButtonTitle}
                onClick={handleActionButtonClick}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
