import { useState, useMemo, useRef, useEffect } from "react";
import cx from "classnames";

import { Icon } from "common/icon";

import { renderOptions } from "./renders";

import "./styles.scss";

export const ModalOptionsButton = ({
  icon,
  variant,
  options = [],
  onOptionSelect,
  optionsContainerStyle = {},
}) => {
  const ref = useRef();
  const buttonRef = useRef();

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const listener = (event) => {
      const optionsContainer = ref?.current;
      const buttonContainer = buttonRef?.current;

      if (
        !buttonContainer ||
        !optionsContainer ||
        buttonContainer?.contains(event.target) ||
        optionsContainer?.contains(event.target)
      ) {
        return;
      }
      setIsModalVisible(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, buttonRef]);

  const buttonClassName = useMemo(() => {
    const className = "pf-modal-options-button";
    return cx(className, { [`${className}-${variant}`]: true });
  }, [variant]);

  const handleOptionSelect = (option) => {
    setIsModalVisible(false);
    onOptionSelect(option);
  };

  return (
    <button
      type="button"
      ref={buttonRef}
      className={buttonClassName}
      onClick={() => setIsModalVisible(!isModalVisible)}
    >
      <Icon icon={icon} />

      {isModalVisible && options.length > 0 && (
        <div
          ref={ref}
          className="options-container"
          style={{ ...optionsContainerStyle }}
        >
          {renderOptions({ options, onClick: handleOptionSelect })}
        </div>
      )}
    </button>
  );
};
