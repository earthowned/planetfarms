import React, { useState } from 'react'
import CalendarEvent from '../NewsCreateModal/CalendarEvent'

export default function CalendarHeader ({ value, setValue }) {
  function currMonthName () {
    return value.format('MMMM')
  }

  function currYear () {
    return value.format('YYYY')
  }

  function prevMonth () {
    return value.clone().subtract(1, 'month')
  }
  function nextMonth () {
    return value.clone().add(1, 'month')
  }

  function thisMonth () {
    return value.isSame(new Date(), 'month')
  }

  const [eventActive, setEventActive] = useState(false)

  return (
    <>
      {eventActive && <CalendarEvent setActive={setEventActive} />}
      <div className='header'>
        <div className='calendar-header-container'>
          <div className='calendar-month-wrapper'>
            <div className='current'>
              {currMonthName()} {currYear()}
            </div>
            <div
              className='previous'
              onClick={() => !thisMonth() && setValue(prevMonth())}
            >
              {!thisMonth() ? String.fromCharCode(171) : null}
            </div>

            <div className='next' onClick={() => setValue(nextMonth())}>
              {String.fromCharCode(187)}
            </div>
            <button className='calendar-today-btn'>Today</button>
          </div>
          <div className='calendar-events'>
            <button className='add-events' onClick={() => setEventActive(true)}>Add new Events</button>
          </div>
        </div>
      </div>
    </>
  )
}
