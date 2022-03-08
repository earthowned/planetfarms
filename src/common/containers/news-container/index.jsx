import { useCallback, useRef } from "react";

import { useDeviceType } from "hooks";
import { DeviceType } from "constants/enums";

import { NewsItem } from "./news-item";

import "./styles.scss";

export const NewsListContainer = ({
  list = [],
  onLoadMore,
  isLastPage,
  onNewsClick,
  isLoading = false,
}) => {
  const observer = useRef();
  const device = useDeviceType();

  const getNewsItemVariant = useCallback(
    (index) => {
      switch (device) {
        case DeviceType.Tablet:
          return "default";

        case DeviceType.Mobile:
          return index === 0 || index % 4 === 0 ? "default" : "mobile";

        default:
          return index === 0 ? "big" : "default";
      }
    },
    [device]
  );

  const lastElementObserver = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLastPage) {
          onLoadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLastPage, isLoading]
  );

  return (
    <div className="news-list-container">
      {list.map((item, index) => {
        const onSetObserver = (node) => {
          if (index === list.length - 1) return lastElementObserver(node);
          return null;
        };

        return (
          <NewsItem
            news={item}
            ref={onSetObserver}
            key={`news-item-${item.id}`}
            variant={getNewsItemVariant(index)}
            onClick={() => onNewsClick(item.id)}
          />
        );
      })}
    </div>
  );
};
