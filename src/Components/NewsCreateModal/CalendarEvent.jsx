import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './calendar-event.css'
import { useDispatch } from 'react-redux'
import { createCalendarEvent } from '../../actions/calendarActions'

const CalendarEvent = ({ setActive, openAddCollection }) => {
  const { pathname } = useLocation()
  const [title, setEventTitle] = useState('')
  const [description, setEventDescription] = useState('')
  const [startDate, setEventStartDate] = useState('')
  const [startTime, setEventStartTime] = useState('')
  const [endDate, setEventEndDate] = useState('')
  const [endTime, setEventEndTime] = useState('')
  const dispatch = useDispatch()
  const [eventTitleError, setEventTitlteError] = useState('')
  const [eventDescriptionError, setEventDescriptionError] = useState('')
  const [eventStartDateError, setEventStartDateError] = useState('')
  const [eventStartTimeError, setEventStartTimeError] = useState('')

  const eventTitleChange = (e) => {
    setEventTitle(e.target.value)
    setEventTitlteError(false)
  }

  const eventStartDateChange = (e) => {
    setEventStartDate(e.target.value)
    setEventStartDateError(false)
  }

  const eventStartTimeChange = (e) => {
    setEventStartTime(e.target.value)
    setEventStartTimeError(false)
  }

  const handleAddEvent = async (e) => {
    e.preventDefault()
    if (!title) setEventTitlteError(true)
    if (!startDate) setEventStartDateError(true)
    if (!startTime) setEventStartTimeError(true)

    if (title && startDate && startTime) {
      dispatch(createCalendarEvent({ title, startDate, startTime }))
      setActive(false)
    }
  }

  return (
    <>
      <div className='collection-modal-container'>
        <div className='collection-modal-inner-container'>
          <div className='collection-modal-header'>
            <h4>{pathname === '/calendar' && 'Add New Event'}</h4>
            <img
              src='/img/close-outline.svg'
              onClick={() => setActive(false)}
              alt='close-icon'
            />
          </div>

          <div className='collection-input-container'>
            <input
              className='default-input-variation'
              placeholder='Enterprise Title'
              error={eventTitleError}
              onChange={(e) => eventTitleChange(e)}

            />
            <br />
            <div style={{ display: 'flex' }}>
              <input className='default-input-variation' type='date' placeholder='Choose Date' error={eventStartDateError} onChange={(e) => eventStartDateChange(e)} />
              <br />
              <input className='default-input-variation' type='time' placeholder='Choose Date' style={{ marginLeft: '25px' }} error={eventStartTimeError} onChange={(e) => eventStartTimeChange(e)} />
            </div>

          </div>
          <button className='default-btn btn-size' onClick={handleAddEvent}>
            Create Events
          </button>
        </div>
      </div>
    </>
  )
}

export default CalendarEvent
