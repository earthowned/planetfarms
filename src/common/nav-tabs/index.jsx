import { useState, useEffect } from "react";

import { NavigationTab } from "./navigation-tab";

import "./styles.scss";

export const NavigationTabs = ({ tabs = [], selectedIndex = 0, onChange }) => {
  const [barWidth, setBarWidth] = useState(0);
  const [bartOffset, setBarOffset] = useState(0);

  useEffect(() => {
    const elements = [...document.getElementsByClassName("nav-tab-container")];
    const widths = elements.map((element) => element.offsetWidth);
    setBarWidth(widths[selectedIndex]);

    const sumWidth = widths
      .filter((_, index) => index < selectedIndex)
      .reduce((a, b) => a + b, 0);

    setBarOffset(sumWidth + selectedIndex * 40);
  }, [selectedIndex]);

  return (
    <div className="nav-tabs-main-container">
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <NavigationTab
            title={tab.title}
            badge={tab.badge}
            onClick={() => onChange(index)}
            isActive={index === selectedIndex}
            key={`${tab.title}-${index.toString()}`}
          />
        ))}
      </div>

      <div
        className="navigation-tab-active-bar"
        style={{ width: `${barWidth}px`, marginLeft: `${bartOffset}px` }}
      >
        <div className="bar-half-shadow" />
      </div>
    </div>
  );
};
