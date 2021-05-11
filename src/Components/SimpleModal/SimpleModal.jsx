import React from 'react'
import './simple-modal.css'

const SimpleModal = ({ setNewCollection, name }) => {
  return (
    <>
      <div className='simple-modal-container'>
        <div className='simple-modal-inner-container'>
          <h4>Add to collection</h4>
          <p>{name || 'File'} has been added to selected collections.</p>
          <button className='secondary-btn' onClick={() => setNewCollection(false)}>Back to files</button>
        </div>
      </div>
    </>
  )
}

export default SimpleModal
