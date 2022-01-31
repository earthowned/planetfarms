import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import { useHistory } from "react-router";

import events from "screens/calendarScreen/EventsData";

import { DateHeader } from "./date-header";
import { prevMonth, nextMonth, buildCalendar, dayStyles } from "./helpers";

import "./styles.scss";

export const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  // checking for the events
  function checkEvents(day) {
    let event;
    events.forEach((item) => {
      if (day.isSame(item.date, "day")) {
        event = "events";
      }
    });
    return event;
  }

  return (
    <div className="calendar">
      <DateHeader
        currentDate={value}
        onDateUp={() => setValue(nextMonth(value))}
        onDateDown={() => setValue(prevMonth(value))}
      />

      <CalendarBody
        value={value}
        calendar={calendar}
        setValue={setValue}
        checkEvents={checkEvents}
      />
    </div>
  );
};

const CalendarBody = ({ calendar, value, checkEvents, setValue }) => {
  const history = useHistory();
  const eventNode = useRef();
  function goCalendar(day) {
    events.forEach((item) => {
      if (day.isSame(item.date, "day")) {
        history.push("/calendar/my-events");
      }
    });
  }
  return (
    <div className="body">
      <div className="day-names">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
          <div key={d} className="week">
            {d}
          </div>
        ))}
      </div>
      {calendar.map((week) => (
        <div key={week}>
          {week.map((day) => (
            <div
              key={day}
              className="day"
              ref={eventNode}
              onClick={() => setValue(day)}
            >
              <div
                className={`${dayStyles(day, value)} ${checkEvents(day)}`}
                onClick={() => goCalendar(day)}
              >
                {day.format("D").toString()}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
