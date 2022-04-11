import cx from "classnames";

import { Icon } from "common/icon";
import { useDeviceType } from "hooks";
import { DeviceType } from "constants/enums";

import "./styles.scss";

export const StarsRating = ({ rate = 5, isFilledStarIcon = true }) => {
  const device = useDeviceType();
  const isMobile = device === DeviceType.Tablet || device === DeviceType.Mobile;

  const indexes = [0, 1, 2, 3, 4];
  const icon = isFilledStarIcon ? "star" : "star-outline";

  const containerClassName = cx("rating-container", {
    [`rating-container-mobile`]: isMobile,
  });

  const className = (index) =>
    cx("rating-star-icon", { [`rating-star-icon-filled`]: index + 1 <= rate });

  if (isMobile) {
    return (
      <div className={containerClassName}>
        <Icon icon={icon} className="rating-star-icon-filled" />
        <h4>{rate}</h4>
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      {indexes.map((index) => (
        <Icon
          icon={icon}
          className={className(index)}
          key={`rating-star-icon-${index.toString()}`}
        />
      ))}
    </div>
  );
};
