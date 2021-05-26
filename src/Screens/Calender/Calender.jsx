import React, { useState, useEffect } from 'react'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import moment from 'moment'
import './calender.css'
import buildCalender from './build'
import dayStyles, { beforeToday, isToday, isSelected } from './calender-day'
import Header from './header'
import { useSelector, useDispatch } from 'react-redux'
import { listCalenderEvents } from '../../actions/calenderActions'

const Calender = () => {
  const data = useSelector((state) => state)
  const [calender, setCalender] = useState([])
  const [value, setValue] = useState(moment())
  const [eventtrue, setEventTrue] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    setCalender(buildCalender(value))
  }, [value])

  useEffect(() => {
    dispatch(listCalenderEvents())
  }, [dispatch])

  const handleEventChange = () => {
    setEventTrue(true)
  }

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

export default Calender
