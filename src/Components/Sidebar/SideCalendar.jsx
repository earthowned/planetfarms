import React, { useState, useEffect } from 'react'
import moment from 'moment'
import buildCalendar from '../../Screens/Calendar/build'
import Header from './SideCalendarHeader'
import dayStyles from '../../Screens/Calendar/calendar-day'
import './side-calendar.css'

const SideCalendar = () => {
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment())
  const [eventtrue, setEventTrue] = useState(false)

  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])

  const handleEventChange = () => {
    setEventTrue(true)
  }

  return (
    <>
      <div className='calendar-side'>
        <Header value={value} setValue={setValue} />

        <div className='body-side'>
          <div className='day-names-side'>
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
              <div className='week-side'>{d}</div>
            ))}
          </div>
          {calendar.map((week) => (
            <div>
              {week.map((day) => (
                <div
                  className='day-side'
                  onClick={() => setValue(day)}
                >
                  <div className={dayStyles(day, value) + '-side'} onClick={() => handleEventChange()}>
                    {day.format('D').toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className='button-sidebar'>View Calendar</button>
      </div>

    </>
  )
}

export default SideCalendar
