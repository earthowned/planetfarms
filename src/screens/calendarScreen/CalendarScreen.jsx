/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import moment from "moment";
import { useLocation, useHistory } from "react-router";

import {
  prevMonth,
  nextMonth,
  dayStyles,
  currYearName,
  currMonthName,
  buildCalendar,
} from "common/navigation/side-navigation/calendar/helpers";

import useSizeFinder from "../../utils/sizeFinder";
import Button from "../../components/button/Button";
import Input from "../../components/input/InputComponent";
import SimpleFilter from "../../components/simpleFilter/SimpleFilter";
import DashboardLayout from "../../layout/dashboardLayout/DashboardLayout";

import data from "./EventsData";
import "./CalendarScreen.css";

const nav = [
  {
    label: "My events",
    link: "/calendar/my-events",
  },
  {
    label: "Enterprises events",
    link: "/calendar/enterprise-events",
  },
  {
    label: "Groups events",
    link: "/calendar/groups-events",
  },
];

const CalendarScreen = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());
  const [events, setEvents] = useState(data);
  const [addEvent, setAddEvent] = useState(false);
  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);
  function addNewEvent(title, date, time) {
    setEvents([...events, { activities: { task: title, time }, date }]);
    setAddEvent(false);
  }
  return (
    <>
      {addEvent && (
        <AddModal addHandler={addNewEvent} showModal={setAddEvent} />
      )}
      <DashboardLayout title="Calendar">
        <CalendarHeader
          value={value}
          changeValue={setValue}
          showModal={setAddEvent}
        />
        <div className="main-calendar-wrapper">
          <div className="day-names">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
              <div key={d} className="week-header">
                {d}
              </div>
            ))}
          </div>
          <Calendar
            calendar={calendar}
            value={value}
            changeValue={setValue}
            events={events}
          />
        </div>
      </DashboardLayout>
    </>
  );
};

const AddModal = ({ addHandler, showModal }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  return (
    <div className="calendar-modal-container">
      <div className="calendar-modal-inner-container">
        <div className="calendar-modal-header">
          <h4>Add new event</h4>
          <button type="button" onClick={() => showModal(false)}>
            <img src="/img/close-outline.svg" alt="close-outline" />
          </button>
        </div>
        <div className="calendar-input-container">
          <Input
            name="Title"
            text={title}
            changeHandler={(e) => setTitle(e.target.value)}
          />
          <div className="date-time-container">
            <Input
              name="Choose date"
              text={date}
              changeHandler={(e) => setDate(e.target.value)}
            />
            <Input
              name="Start time"
              text={time}
              changeHandler={(e) => setTime(e.target.value)}
            />
          </div>
        </div>
        <button type="button" className="calendar-member-add">
          <img src="/img/plus.svg" alt="add icon" />
          <span>Add member</span>
        </button>
        <div className="calendar-modal-btn">
          <button
            type="button"
            name="Add event"
            onClick={() => addHandler(title, date, time)}
          >
            Add event
          </button>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ item }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [active] = useState(pathname === item.link);
  return (
    <li
      className={active ? "calendar-nav-item active" : "calendar-nav-item"}
      key={item.label}
      onClick={() => history.push(item.link)}
    >
      {item.label}
    </li>
  );
};

const CalendarHeader = ({ value, changeValue, showModal }) => {
  const windowWidth = useSizeFinder();
  return (
    <>
      <div className="calendar-top-header">
        {windowWidth > 650 ? (
          <ul>
            {nav.map((item, index) => (
              <NavItem key={index.toString()} item={item} />
            ))}
          </ul>
        ) : (
          <SimpleFilter data={nav} />
        )}
      </div>
      <div className="calendar-second-header">
        <div className="main-calendar-header">
          <div className="row-1">
            <div>
              <h3 className="calendar-date-header">
                {currMonthName(value)} {currYearName(value)}
              </h3>
              <div className="date-indicator">
                <span onClick={() => changeValue(prevMonth(value))}>
                  {String.fromCharCode(60)}
                </span>
                <span onClick={() => changeValue(nextMonth(value))}>
                  {String.fromCharCode(62)}
                </span>
              </div>
            </div>
            <button
              type="button"
              className="secondary-btn main-cal-btn"
              onClick={() => changeValue(moment())}
            >
              Today
            </button>
          </div>
          <div className="row-2">
            <Button name="Add new event" clickHandler={() => showModal(true)} />
          </div>
        </div>
      </div>
    </>
  );
};

const Calendar = ({ calendar, value, changeValue, events }) => {
  return (
    <div className="week-container">
      {calendar.map((week) => (
        <div key={week} className="week">
          {week.map((day, index) => (
            <DayComponent
              day={day}
              key={index.toString()}
              events={events}
              value={value}
              setValue={changeValue}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const DayComponent = ({ day, events, value, setValue }) => {
  const windowWidth = useSizeFinder();
  const [detailActive, setDetailActive] = useState(false);

  // checking for the events and gathering activiites
  // eslint-disable-next-line no-shadow
  function checkEvents(day) {
    let event = [];
    events.forEach((item) => {
      if (day.isSame(item.date, "day")) {
        event = [...item.activities];
      }
    });
    return event;
  }

  function changeDate() {
    setDetailActive(!detailActive);
  }

  return (
    <div key={day} className="day" onClick={() => setValue(day)}>
      <div className={dayStyles(day, value)}>
        <span>
          {windowWidth > 650 && day.format("MMM").toString()}{" "}
          {day.format("D").toString()}
        </span>
        {checkEvents(day).length > 0 && (
          <div className="activities-container" onClick={changeDate}>
            <div className="activities">
              <ul>
                {checkEvents(day)
                  .slice(0, 2)
                  .map((item) => (
                    <li key={item.taskId}>
                      <span className="task-time">
                        {windowWidth < 950 && (item.time || item.task)}
                      </span>
                      <span>
                        {windowWidth > 950 && item.time}{" "}
                        {windowWidth > 950 && item.task}
                      </span>
                    </li>
                  ))}
                {checkEvents(day).length > 2 && (
                  <li className="remaining-act">
                    {checkEvents(day).length - 2}+ events{" "}
                  </li>
                )}
              </ul>
            </div>
            {/* detailActive && <ToolTip checkEvents={checkEvents} day={day} /> */}
          </div>
        )}
      </div>
    </div>
  );
};

// const ToolTip = ({ checkEvents, day }) => {
//   return (
//     <div className="tooltip">
//       <h2>{day.format("dddd")}</h2>
//       <h3>{day.format("MMMM d, YYYY")}</h3>
//       <p>My events:</p>
//       <ul>
//         {checkEvents(day).map((item, index) => (
//           <ToolTipLink key={index.toString()} item={item} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// const ToolTipLink = ({ item }) => {
//   return (
//     <>
//       <li key={item.task}>
//         <span>
//           {item.time} {item.task}
//         </span>
//       </li>
//       <div className="task-edit-option">
//         <ul>
//           <li>
//             <img src="/img/follow-icon.svg" alt="add members" />{" "}
//             <p>Add members</p>
//           </li>
//           <li>
//             <img src="/img/edit-icon.svg" alt="edit events" /> <p>Edit event</p>
//           </li>
//           <li>
//             <img src="/img/trash-icon.svg" alt="delete events" />{" "}
//             <p>Delete event</p>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// };

export default CalendarScreen;
