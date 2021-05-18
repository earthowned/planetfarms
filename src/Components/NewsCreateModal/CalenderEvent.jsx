import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './calender-event.css'

const CalenderEvent = ({ setActive, openAddCollection }) => {
  const { pathname } = useLocation()

  return (
    <>
      <div className='collection-modal-container'>
        <div className='collection-modal-inner-container'>
          <div className='collection-modal-header'>
            <h4>{pathname === '/calender' && 'Add New Event'}</h4>
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

            />
            <br />
            <div style={{ display: 'flex' }}>
              <input className='default-input-variation' type='date' placeholder='Choose Date' />
              <br />
              <input className='default-input-variation' type='time' placeholder='Choose Date' style={{ marginLeft: '25px' }} />
            </div>

          </div>
          <button className='default-btn btn-size'>
            Create Events
          </button>
        </div>
      </div>
    </>
  )
}

export default CalenderEvent
