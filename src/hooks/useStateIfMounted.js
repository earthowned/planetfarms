import { useState, useEffect, useRef } from "react";

const useIsComponentMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted;
};

export const useStateIfMounted = (initialValue) => {
  const isComponentMounted = useIsComponentMounted();
  const [state, setState] = useState(initialValue);

  const newSetState = (value) => {
    if (isComponentMounted.current) {
      setState(value);
    }
  };

  return [state, newSetState];
};
