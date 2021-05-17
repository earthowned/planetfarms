import React, { useState, useEffect } from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import moment from 'moment'
import './calender.css'
import buildCalender from './build'
import dayStyles, { beforeToday } from './calender-day'
import Header from './header'

const Calender = () => {
  const [calender, setCalender] = useState([])
  const [value, setValue] = useState(moment())

  useEffect(() => {
    setCalender(buildCalender(value))
  }, [value])

  return (
    <DashboardLayout title='Calender'>
      <div className='calender'>
        <Header value={value} setValue={setValue} />

        <div className='body'>
          <div className='day-names'>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div className='week'>{d}</div>
            ))}
          </div>
          {calender.map((week) => (
            <div>
              {week.map((day) => (
                <div
                  className='day'
                  onClick={() => !beforeToday(day) && setValue(day)}
                >
                  <div className={dayStyles(day, value)}>
                    {day.format('MMM D').toString()}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Calender
