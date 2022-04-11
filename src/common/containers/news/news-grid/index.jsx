import { useCallback, useMemo } from "react";

import { ComponentLoader } from "common/loader";

import { DeviceType } from "constants/enums";
import { useDeviceType, useLoadMore } from "hooks";

import { NewsItem } from "./news-item";

import "./styles.scss";

export const NewsGrid = ({
  list = [],
  onLoadMore,
  isLastPage,
  onNewsClick,
  isLoading = false,
}) => {
  const device = useDeviceType();

  const { setElementObserver } = useLoadMore({
    isLoading,
    isLastPage,
    onLoadMore,
  });

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

  const loaderWidth = useMemo(() => {
    if (device === DeviceType.Mobile) return "100%";
    return "50%";
  }, [device]);

  return (
    <>
      <div className="news-list-container">
        {list.map((item, index) => {
          const onSetObserver = (node) => {
            if (index === list.length - 1) return setElementObserver(node);
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

      {isLoading && list.length > 0 && (
        <div className="news-list-loader-container">
          <ComponentLoader width={loaderWidth} />
        </div>
      )}
    </>
  );
};
