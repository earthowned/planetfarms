import React from 'react'

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

  return (
    <div className='header-side'>
      <div className='calendar-header-container-side'>
        <div className='calendar-month-wrapper-side'>

          <div
            className='previous-side'
            onClick={() => setValue(prevMonth())}
          >
            {String.fromCharCode(171)}
          </div>
          <div className='current-side'>
            {currMonthName()} {currYear()}
          </div>

          <div className='next-side' onClick={() => setValue(nextMonth())}>
            {String.fromCharCode(187)}
          </div>
        </div>

      </div>
    </div>
  )
}
