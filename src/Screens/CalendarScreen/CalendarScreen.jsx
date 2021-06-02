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
import useSizeFinder from '../../utils/SizeFinder'
import SimpleFilter from '../../Components/SimpleFilter/SimpleFilter'
const nav = [
  {
    label: 'My events',
    link: '/calendar/my-events'
  },
  {
    label: 'Enterprises events',
    link: '/calendar/enterprise-events'
  },
  {
    label: 'Groups events',
    link: '/calendar/groups-events'
  }
]

const data = [
  {
    activities: [
      {
        task: 'take a new course',
        time: '04:00 pm'
      }, 
      {
        task: 'Perform an art',
        time: '01:00 am'
      },
      {
        task: 'Perform an art',
        time: ''
      },
      {
        task: 'Perform an art',
        time: ''
      },
    ],
    date: '2021-6-16',
  },
  {
    activities: [
      {
        task: 'take a new course',
        time: '04:00 pm'
      }, 
      {
        task: 'Perform an art',
        time: '01:00 am'
      },
      {
        task: 'Perform an art',
        time: ''
      }
    ],
    date: '2021-6-17',
  },
  {
    activities: [
      {
        task: 'Perform an art',
        time: ''
      },
      {
        task: 'Perform an art',
        time: ''
      },
    ],
    date: '2021-6-18',
  },
]

const CalendarScreen = () => {
  const [calendar, setCalendar] = useState([])
  const [value, setValue] = useState(moment())
  const [addEvent, setAddEvent] = useState(false)
  const [events, setEvents] = useState(data);
  const [title, setTitle] = useState('');
  const [titleArray, setTitleArray] = useState([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setCalendar(buildCalendar(value))
  }, [value])

  function addNewEvent (e) {
    e.preventDefault();
    titleArray.push({task: title, time});    
    setEvents([...events, {activities: titleArray, date}]);
    setAddEvent(false);
  }

  return (
    <>
      {addEvent && <div className='calendar-modal-container'>
        <div className='calendar-modal-inner-container'>
          <div className='calendar-modal-header'>
            <h4>Add new event</h4>
            <button onClick={() => setAddEvent(false)}><img src='/img/close-outline.svg' alt='close-outline' /></button>
          </div>
          <div className='calendar-input-container'>
            <Input name='Title' text={title} changeHandler={(e) => setTitle(e.target.value)} />
            <div className="date-time-container">
              <Input name='Choose date' text={date} changeHandler={(e) => setDate(e.target.value)} />
              <Input name='Start time' text={time} changeHandler={(e) => setTime(e.target.value)} />
            </div>
          </div>
          <button className='calendar-member-add'><img src='/img/plus.svg' alt='add icon' /><span>Add member</span></button>
          <div className='calendar-modal-btn'>
            <button name='Add event' onClick={(e) => addNewEvent(e)} >Add event</button>
          </div>

        </div>
                   </div>}
      <DashboardLayout title='Calendar'>
        <CalendarHeader value={value} setValue={setValue} setAddEvent={setAddEvent} />
        <div className='main-calendar-wrapper'>
          <div className='day-names'>
            {
              ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <div key={d} className='week-header'>{d}</div>)
            }
          </div>
          <Calendar calendar={calendar} value={value} setValue={setValue} events={events} />
        </div>
      </DashboardLayout>
    </>
  )
}

const NavItem = ({ item }) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const [active, setActive] = useState(pathname === item.link)
  return (
    <li
      className={active ? 'calendar-nav-item active' : 'calendar-nav-item'}
      key={item.label}
      onClick={() => history.push(item.link)}
    >{item.label}
    </li>
  )
}

const CalendarHeader = ({ value, setValue, setAddEvent }) => {
  const windowWidth = useSizeFinder();
  return (
    <>
      <div className='calendar-top-header'>
        {
        windowWidth > 650 
        ? <ul>
          {
              nav.map(item => <NavItem item={item} />)
          }
        </ul>
        : <SimpleFilter data={nav} />
        }
      </div>
      <div className='calendar-second-header'>
        <div className='main-calendar-header'>
          <div className='row-1'>
            <div>
            <h3 className="calendar-date-header">{currMonthName(value)} {currYearName(value)}</h3>
            <div className='date-indicator'>
              <span onClick={() => setValue(prevMonth(value))}>{String.fromCharCode(60)}</span>
              <span onClick={() => setValue(nextMonth(value))}>{String.fromCharCode(62)}</span>
            </div>
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

const Calendar = ({ calendar, value, setValue, events }) => {
  const windowWidth = useSizeFinder();
  // checking for the events and gathering activiites
  function checkEvents (day) {
    let event = []
    events.forEach(item => {
      if (day.isSame(item.date, 'day')) {
        event = [...item.activities]
      }
    })
    return event
  }
  return (
    <div className="week-container">
      {
                calendar.map(week => <div key={week} className='week'>
                  {
                            week.map(day => <div key={day} className='day' onClick={() => setValue(day)}>

                              <div className={dayStyles(day, value)}>
                                <span>{windowWidth > 650 && day.format('MMM').toString()} {day.format('D').toString()}</span>
                                {checkEvents(day).length > 0 && <div className='activities-container'><div className='activities'>
                                  <ul>
                                    {
                                        checkEvents(day).slice(0, 2).map(item => <li key={item.task}>
                                          <span className="task-time">{windowWidth < 950 && (item.time || item.task)}</span>
                                          <span>{windowWidth > 950 && item.time} {windowWidth > 950 && item.task}</span></li>)
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
    </div>
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
                  return <li key={item.task}>{item.time} {item.task}</li>
                })
            }
      </ul>
    </div>
  )
}

export default CalendarScreen
