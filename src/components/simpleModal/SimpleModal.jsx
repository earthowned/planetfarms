import React from 'react'
import './simple-modal.css'

const SimpleModal = ({ setNewCollection, name, clickHandler }) => {
  return (
    <>
      <div className='simple-modal-container'>
        <div className='simple-modal-inner-container'>
          <div>
          <h4>Add to collection</h4>
          <button onClick={() => clickHandler(false)}><img src='/img/close-outline.svg' alt='close-outline' /></button>
          </div>
          <p>{name || 'File'} has been added to selected collections.</p>
          <button className='secondary-btn' onClick={() => setNewCollection(false)}>Back to files</button>
        </div>
      </div>
    </>
  )
}

export default SimpleModal
