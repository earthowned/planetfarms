import moment from 'moment'
import React, { useState, useEffect } from 'react'

import buildCalendar from './build'

import './calendar.css'
import CalendarHeader from './Header'
import dayStyles from './styles'

const Calendar = () => {
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment())

  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])

  const events = [
    {
      event: 'take a new course',
      year: '2021-5-16'
    },
    {
      event: 'Perform an art',
      year: '2021-5-15'
    },
    {
      event: 'Create new app',
      year: '2021-6-31'
    },
    {
      event: 'Go to gym',
      year: '2021-4-10'
    }

  ]

  // checking for the events

  function checkEvents (day) {
    let event
    events.forEach(item => {
      if (day.isSame(item.year, 'day')) {
        event = 'events'
      }
    })
    return event
  }

  return (
    <div className='calendar'>
      <CalendarHeader value={value} setValue={setValue} />
      <div className='body'>
        <div className='day-names'>
          {
                        ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => <div key={d} className='week'>{d}</div>)
                    }
        </div>
        {
            calendar.map(week => <div key={week} className={week}>
              {
                    week.map(day => <div key={day} className='day' onClick={() => setValue(day)}>
                      <div className={`${dayStyles(day, value)} ${checkEvents(day)}`}>
                        {day.format('D').toString()}
                      </div>
                    </div>)
                }
            </div>)
            }
      </div>
      <div className='calendar-footer'>
        <button className='calendar-btn'>View Calendar</button>
      </div>
    </div>
  )
}

export default Calendar
