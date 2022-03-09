import { useState, useMemo, useRef, useEffect } from "react";
import cx from "classnames";

import { Icon } from "common/icon";
import { IconButton } from "common/buttons/icon-button";

import "./styles.scss";

export const SearchBar = ({ expanded = false }) => {
  const inputRef = useRef();

  const [value, setValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(expanded);

  const containerClassName = useMemo(
    () =>
      cx("search-bar-container", {
        "search-bar-container-expanded": isExpanded,
      }),
    [isExpanded]
  );

  useEffect(() => {
    if (inputRef?.current) {
      if (isExpanded) {
        inputRef.current.focus();
      }
      if (!isExpanded) {
        inputRef.current.blur();
      }
    }
  }, [isExpanded, inputRef]);

  const handleContainerClick = () => {
    if (!isExpanded) setIsExpanded(true);
  };

  const searchBarClassName = useMemo(
    () =>
      cx("search-bar-input-container", {
        "search-bar-input-container-expanded": isExpanded,
      }),
    [isExpanded]
  );

  return (
    <div className="pf-search-bar-container">
      <IconButton
        icon="search"
        variant="white"
        onClick={handleContainerClick}
      />

      <div className={searchBarClassName}>
        <Icon icon="search" />

        {isExpanded && (
          <input
            type="text"
            value={value}
            ref={inputRef}
            onChange={(e) => setValue(e.target.value)}
          />
        )}

        {isExpanded && (
          <IconButton
            icon="cross"
            variant="white"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </div>
    </div>
  );
};

/*
return (
    <div className={containerClassName} onClick={handleContainerClick}>
      <Icon icon="search" />
      <div className="search-bar-input-container" />

       <input
        type="text"
        value={value}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      /> 

       {isExpanded && (
        <IconButton
          icon="cross"
          variant="white"
          onClick={() => setIsExpanded(false)}
        />
      )} 
      </div>
      );
*/
