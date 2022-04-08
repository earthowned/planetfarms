import { useRef, useCallback } from "react";

export const useLoadMore = ({ isLoading, isLastPage, onLoadMore }) => {
  const observer = useRef();

  const setElementObserver = useCallback(
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
    [observer?.current, isLoading, isLastPage]
  );

  return { setElementObserver };
};
