import { useCallback } from "react";

import { useDeviceType } from "hooks";
import { DeviceType } from "constants/enums";

import { NewsItem } from "./news-item";

import "./styles.scss";

export const NewsListContainer = ({ list = [], onNewsClick }) => {
  const device = useDeviceType();

  const getNewsItemVariant = useCallback(
    (index) => {
      switch (device) {
        case DeviceType.Tablet:
          return "default";

        case DeviceType.Mobile:
          return "default";

        default:
          return index === 0 ? "big" : "default";
      }
    },
    [device]
  );

  return (
    <div className="news-list-container">
      {list.map((item, index) => (
        <NewsItem
          news={item}
          key={`news-item-${item.id}`}
          variant={getNewsItemVariant(index)}
        />
      ))}
    </div>
  );
};
