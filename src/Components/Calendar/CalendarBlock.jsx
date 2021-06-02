import React, { useState, useEffect } from 'react'
import moment from 'moment'
import buildCalendar from '../../Screens/Calendar/build'
import Header from './header'
import dayStyles, { beforeToday, isToday, isSelected } from '../../Screens/Calendar/calendar-day'
import './calendar-block.css'

const days = {'sidebar': ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        'content': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}

const SideCalendar = ({position = 'content'}) => {
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
    <div class="sidebar">
      <div className='calendar'>
        <Header value={value} setValue={setValue} />

        <div className='body'>
          <div className='day-names'>
            {days[position].map((d) => (
              <div className='week'>{d}</div>
            ))}
          </div>
          {calendar.map((week) => (
            <div>
              {week.map((day) => (
                <div
                  className='day'
                  onClick={() => setValue(day)}
                >
                  <div className={dayStyles(day, value) + ''} onClick={() => handleEventChange()}>
                    {day.format('D').toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        
      </div>

    </div>
  )
}

const CalendarBlock = ({position = 'content'}) => {
  const [value, setValue] = useState(moment())
  const [eventtrue, setEventTrue] = useState(false)
  const [calendar, setCalendar] = useState([])
  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])
  const handleEventChange = () => {
    setEventTrue(true)
  }
  return (
    <div className='calendar'>
      <Header value={value} setValue={setValue} />        
      <div className='body'>
        <div className='day-names'>
          {days[position].map((d) => (
            <div className='week'>{d}</div>
          ))}
        </div>
        {calendar.map((week) => (
          <div>
            {week.map((day) => (
              <div className='day' onClick={() => !beforeToday(day) && setValue(day)} >
                <div className={dayStyles(day, value)} onClick={() => handleEventChange()}>
                  {position == 'sidebar' ? day.format('D').toString() : day.format('MMM D').toString()}
                  {
                    <div>
                      {/** events  comes here but we need to work events according to dates */}
                    </div>}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      { position == 'sidebar' && <button className='button-sidebar'>View Calendar</button> }
    </div>
  )
}

export default CalendarBlock
