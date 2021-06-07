import moment from 'moment'
import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router'
import buildCalendar from './Build'
import './Calendar.css'
import CalendarHeader from './Header'
import dayStyles from './Styles'
import events from '../../Screens/calendarScreen/EventsData'

const Calendar = () => {
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment())
  const history = useHistory()
  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])

  // checking for the events
  function checkEvents (day) {
    let event
    events.forEach(item => {
      if (day.isSame(item.date, 'day')) {
        event = 'events'
      }
    })
    return event
  }

  return (
    <div className='calendar'>
      <CalendarHeader value={value} setValue={setValue} />
      <CalendarBody calendar={calendar} value={value} checkEvents={checkEvents} setValue={setValue} />
      <div className='calendar-footer'>
        <button className='calendar-btn' onClick={() => history.push('/calendar/my-events')}>View Calendar</button>
      </div>
    </div>
  )
}

const CalendarBody = ({ calendar, value, checkEvents, setValue }) => {
  const history = useHistory()
  const eventNode = useRef()
  function goCalendar (day) {
    events.forEach(item => {
      if (day.isSame(item.date, 'day')) {
        history.push('/calendar/my-events')
      }
    })
  }
  return (
    <div className='body'>
      <div className='day-names'>
        {
          ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => <div key={d} className='week'>{d}</div>)
        }
      </div>
      {
        calendar.map(week => <div key={week}>
          {
            week.map(day => <div key={day} className='day' ref={eventNode} onClick={() => setValue(day)}>
              <div className={`${dayStyles(day, value)} ${checkEvents(day)}`} onClick={() => goCalendar(day)}>
                {day.format('D').toString()}
              </div>
            </div>)
          }
        </div>)
      }
    </div>
  )
}

export default Calendar
