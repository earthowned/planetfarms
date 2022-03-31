import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import cx from "classnames";

import { Icon } from "common/icon";
import { Divider } from "common/divider";

import { useDeviceType } from "hooks";
import { DeviceType } from "constants/enums";

import "./styles.scss";

export const SortButton = ({ options, selectedOption, onChange }) => {
  const listRef = useRef();
  const buttonRef = useRef();
  const device = useDeviceType();
  const isMobile = device === DeviceType.Mobile || device === DeviceType.Tablet;

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const listener = (event) => {
      const optionsContainer = listRef?.current;
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
  }, [listRef, buttonRef]);

  const modalClassName = useMemo(
    () =>
      cx("sort-modal-container", {
        "sort-modal-container-mobile": isMobile,
      }),
    [isMobile]
  );

  const listClassName = useMemo(() => {
    return cx("list-container", {
      "list-container-mobile": isMobile,
    });
  }, [isMobile]);

  const getOptionClassName = useCallback(
    ({ value }) => {
      const className = "option-container";
      return cx(className, {
        [`${className}-selected`]: value === selectedOption?.value,
      });
    },
    [selectedOption?.value]
  );

  const onChangeOption = (option) => {
    setIsModalVisible(false);
    onChange(option);
  };

  return (
    <div className="sort-button-container">
      <button
        type="button"
        ref={buttonRef}
        className="sort-button"
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        {selectedOption?.label}
        <Icon icon={`chevron-${isModalVisible ? "up" : "down"}`} />
      </button>

      {isModalVisible && (
        <div className={modalClassName}>
          <div ref={listRef} className={listClassName}>
            {options.map((option, index) => (
              <div
                onClick={() => onChangeOption(option)}
                className={getOptionClassName(option)}
                key={`sort-button-option-${index.toString()}`}
              >
                <div className="content-container">
                  {option.icon && <Icon icon={option.icon} />}
                  <h5>{option.label}</h5>
                </div>

                <Divider
                  withLeftGradient
                  withRightGradient
                  backgroundColor="rgba(238, 239, 239, 0.1)"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
