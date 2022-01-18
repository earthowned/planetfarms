import React from "react";
import {
  prevMonth,
  currMonthName,
  currYearName,
  nextMonth,
} from "./DateFunctions";

const CalendarHeader = ({ value, setValue }) => {
  return (
    <div className="header">
      <div className="previous" onClick={() => setValue(prevMonth(value))}>
        {String.fromCharCode(60)}
      </div>
      <div className="current">
        {currMonthName(value)} , {currYearName(value)}
      </div>
      <div onClick={() => setValue(nextMonth(value))} className="next">
        {String.fromCharCode(62)}
      </div>
    </div>
  );
};

export default CalendarHeader;
