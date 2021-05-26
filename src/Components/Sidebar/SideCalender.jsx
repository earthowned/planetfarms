import React, { useState, useEffect } from 'react'
import moment from 'moment'
import buildCalender from '../../Screens/Calender/build'
import Header from '../Sidebar/SideCalenderHeader'
import dayStyles from '../../Screens/Calender/calender-day'
import './side-calender.css'

const SideCalendar = () => {
  const [calender, setCalender] = useState([])
  const [value, setValue] = useState(moment())
  const [eventtrue, setEventTrue] = useState(false)

  useEffect(() => {
    setCalender(buildCalender(value))
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
          {calender.map((week) => (
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
        <button className='button-sidebar'>View Calender</button>
      </div>

    </>
  )
}

export default SideCalendar
