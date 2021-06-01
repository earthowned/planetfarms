import moment from 'moment'
import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router'
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout'
import { prevMonth, currMonthName, currYearName, nextMonth } from '../../Components/Calendar/dateFunctions'

import './calendar-screen.css'
import Button from '../../Components/Button/Button'
import Input from '../../Components/Input/InputComponent'
import buildCalendar from '../../Components/Calendar/build'
import dayStyles from '../../Components/Calendar/styles'
const nav = [
  {
    name: 'My events',
    slug: '/calendar/my-events'
  },
  {
    name: 'Enterprises events',
    slug: '/calendar/enterprise-events'
  },
  {
    name: 'Groups events',
    slug: '/calendar/groups-events'
  }
]

const events = [
  {
    activities: ['take a new course', 'Perform an art', 'Create new app', 'Go to gym', 'Create new app', 'take a new course'],
    year: '2021-5-16'
  },
  {
    activities: ['Perform an art', 'Go to gym'],
    year: '2021-5-15'
  },
  {
    activities: ['Create new app'],
    year: '2021-7-1'
  },
  {
    activities: ['Go to gym', 'take a new course', 'Create new app', 'Perform an art'],
    year: '2021-4-10'
  }
]

const CalendarScreen = () => {
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment())
  const [addEvent, setAddEvent] = useState(false)
  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])

  return (
    <>
      {addEvent && <div className='calendar-modal-container'>
        <div className='calendar-modal-inner-container'>
          <div className='calendar-modal-header'>
            <h4>Add new event</h4>
            <button onClick={() => setAddEvent(false)}><img src='/img/close-outline.svg' alt='close-outline' /></button>
          </div>
          <div className='calendar-input-container'>
            <Input text='Title' />
            <div>
              <Input text='Choose date' />
              <Input text='Start time' />
            </div>
          </div>
          <button className='calendar-member-add'><img src='/img/plus.svg' alt='add icon' /><span>Add member</span></button>
          <div className='calendar-modal-btn'>
            <Button name='Add event' clickHandler={() => console.log()} />
          </div>

        </div>
                   </div>}
      <DashboardLayout title='Calendar'>
        <CalendarHeader value={value} setValue={setValue} setAddEvent={setAddEvent} />
        <div className='main-calendar-wrapper'>
          <div className='day-names'>
            {
                        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d} className='week'>{d}</div>)
                    }
          </div>
          <Calendar calendar={calendar} value={value} setValue={setValue} />
        </div>
      </DashboardLayout>
    </>
  )
}

const NavItem = ({ item }) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const [active, setActive] = useState(pathname === item.slug)
  return (
    <li
      className={active ? 'calendar-nav-item active' : 'calendar-nav-item'}
      key={item.name}
      onClick={() => history.push(item.slug)}
    >{item.name}
    </li>
  )
}

const CalendarHeader = ({ value, setValue, setAddEvent }) => {
  return (
    <>
      <div className='calendar-top-header'>
        <ul>
          {
                    nav.map(item => <NavItem item={item} />)
                    }
        </ul>
      </div>
      <div className='calendar-second-header'>
        <div className='main-calendar-header'>
          <div className='row-1'>
            <h3>{currMonthName(value)} {currYearName(value)}</h3>
            <div className='date-indicator'>
              <span onClick={() => setValue(prevMonth(value))}>{String.fromCharCode(60)}</span>
              <span onClick={() => setValue(nextMonth(value))}>{String.fromCharCode(62)}</span>
            </div>
            <button className='secondary-btn main-cal-btn' onClick={() => setValue(moment())}>Today</button>
          </div>
          <div className='row-2'>
            <Button name='Add new event' clickHandler={() => setAddEvent(true)} />
          </div>
        </div>
      </div>
    </>
  )
}

const Calendar = ({ calendar, value, setValue }) => {
  // checking for the events and gathering activiites
  function checkEvents (day) {
    let event = []
    events.forEach(item => {
      if (day.isSame(item.year, 'day')) {
        event = [...item.activities]
      }
    })
    return event
  }
  return (
    <>
      {
                calendar.map(week => <div key={week} className='week-container'>
                  {
                            week.map(day => <div key={day} className='day' onClick={() => setValue(day)}>

                              <div className={dayStyles(day, value)}>
                                <span>{day.format('MMM').toString()} {day.format('D').toString()}</span>
                                {checkEvents(day).length > 0 && <div className='activities-container'><div className='activities'>
                                  <ul>
                                    {
                                        checkEvents(day).slice(0, 2).map(item => <li key={item}>{item}</li>)
                                        }
                                    {checkEvents(day).length > 2 && <li className='remaining-act'>{(checkEvents(day).length - 2)}+ events </li>}
                                  </ul>

                                </div>
                                  <ToolTip checkEvents={checkEvents} day={day} />
                                </div>}
                              </div>
                            </div>)
                        }
                </div>)
                }
    </>
  )
}

const ToolTip = ({ checkEvents, day }) => {
  return (
    <div className='tooltip'>
      <h2>{day.format('dddd')}</h2>
      <h3>{day.format('MMMM d, YYYY')}</h3>
      <p>My events:</p>
      <ul>
        {
                checkEvents(day).map(item => {
                  return <li key={item}>{item}</li>
                })
            }
      </ul>
    </div>
  )
}

export default CalendarScreen
