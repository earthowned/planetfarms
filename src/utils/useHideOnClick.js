import { useEffect, useRef } from "react";

const useHideOnClick = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    const hideShowHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", hideShowHandler);

    return () => {
      document.removeEventListener("mousedown", hideShowHandler);
    };
  });
  return domNode;
};

export default useHideOnClick;
