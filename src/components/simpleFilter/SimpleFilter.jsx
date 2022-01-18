/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from "react";
import "./SimpleFilter.scss";

const SimpleFilter = ({ data }) => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("Select Category");
  const node = useRef();
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  function selectItems(val) {
    setActive(false);
    setSelected(val);
  }

  return (
    <div className="simple-filter-container" ref={node}>
      <div onClick={() => setActive(!active)} className="simple-filter-title">
        <span>{selected}</span>{" "}
        <img
          className="dropdown-icon"
          src="/img/chevron-right-outline.svg"
          alt=""
        />
      </div>
      {active && (
        <ul className="simple-filter-dropdown">
          {data.length &&
            data.map((item, index) => (
              <li
                key={`${item.label}-${index.toString()}`}
                onClick={() => selectItems(item.label)}
              >
                {item.label}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SimpleFilter;
