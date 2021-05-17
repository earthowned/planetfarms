import { useState } from 'react'
import './news-create-modal.css'
import Button from '../Button/Button'

const CalenderEvent = ({ eventActive, setEventActive }) => {
  return (
    <>
      {eventActive && (
        <div className='collection-modal-container'>
          <div className='collection-modal-inner-container'>
            <CollectionModalHeader title='Add text' setEventActive={setEventActive} />
            <div className='photo-input-container'>
              <input
                className='default-input-variation'
                placeholder='Collection title'
              />

              <br />
              <textarea
                className='default-input-variation text-area-variation-2'
                placeholder='Type text here '
              />
            </div>
            <Button name='Add block' />
          </div>
        </div>
      )}
    </>
  )
}

export default CalenderEvent
