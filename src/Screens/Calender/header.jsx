import React, { useState } from 'react'

export default function CalenderHeader ({ value, setValue }) {
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

  const [eventActive, setEventActive] = useState(true)

  return (

    <div className='header'>
      <div className='calender-header-container'>
        <div className='calender-month-wrapper'>
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
          <button className='calender-today-btn'>Today</button>
        </div>
        <div className='calender-events'>
          <button className='add-events'>Add new Events</button>
        </div>
      </div>
    </div>
  )
}
