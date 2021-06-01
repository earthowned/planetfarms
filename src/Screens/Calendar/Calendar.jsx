import React, { useState, useEffect } from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import moment from 'moment'
import './calendar.css'
import buildCalendar from './build'
import dayStyles, { beforeToday, isToday, isSelected } from './calendar-day'
import Header from './header'
import { useSelector, useDispatch } from 'react-redux'
import { listCalendarEvents } from '../../actions/calendarActions'

const Calendar = () => {
  const data = useSelector((state) => state)
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment())
  const [eventtrue, setEventTrue] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])

  useEffect(() => {
    dispatch(listCalendarEvents())
  }, [dispatch])

  const handleEventChange = () => {
    setEventTrue(true)
  }

  return (
    <DashboardLayout title='Calendar'>
      <div className='calendar'>
        <Header value={value} setValue={setValue} />

        <div className='body'>
          <div className='day-names'>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
              <div className='week'>{d}</div>
            ))}
          </div>
          {calendar.map((week) => (
            <div>
              {week.map((day) => (
                <div
                  className='day'
                  onClick={() => !beforeToday(day) && setValue(day)}
                >

                  <div className={dayStyles(day, value)} onClick={() => handleEventChange()}>
                    {day.format('MMM D').toString()}
                    {eventtrue === isSelected(day, value) &&
                      <div>
                        {/** events  comes here but we need to work events according to dates */}
                      </div>}
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

export default Calendar
