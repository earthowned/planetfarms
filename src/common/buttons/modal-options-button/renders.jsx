import cx from "classnames";

import { Icon } from "common/icon";
import { Divider } from "common/divider";

export const renderOptions = ({ options = [], onClick }) => {
  const getOptionClassName = (optionVariant = "white") => {
    return cx("option-container", {
      [`option-container-${optionVariant}`]: true,
    });
  };

  return options.map((option, index) => (
    <>
      <div
        onClick={() => onClick(option)}
        key={`${option.label}-${index.toString()}`}
        className={getOptionClassName(option.variant)}
      >
        {option?.icon && <Icon icon={option.icon} />}
        {option?.label && <h4>{option.label}</h4>}
      </div>

      {index !== options.length - 1 && (
        <Divider
          withLeftGradient
          withRightGradient
          backgroundColor="rgba(238, 239, 239, 0.1)"
        />
      )}
    </>
  ));
};
