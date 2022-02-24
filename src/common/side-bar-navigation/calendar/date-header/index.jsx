import React from "react";

import { IconButton } from "common/buttons/icon-button";

import { currYearName, currMonthName } from "../helpers";

import "./styles.scss";

export const DateHeader = ({ currentDate, onDateDown, onDateUp }) => {
  return (
    <div className="side-nav-calendar-date-header">
      <IconButton
        variant="white"
        icon="chevron-left"
        onClick={onDateDown}
        className="chevron-btn"
      />

      <p className="h7">
        {currMonthName(currentDate)} , {currYearName(currentDate)}
      </p>

      <IconButton
        variant="white"
        onClick={onDateUp}
        icon="chevron-right"
        className="chevron-btn"
      />
    </div>
  );
};
