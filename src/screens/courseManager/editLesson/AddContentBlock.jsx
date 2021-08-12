import React from 'react'

const AddContentBlock = ({ setTestModal }) => {
  return (
    <div className='admin-lesson-create-btn-wrapper'>
      <button className='secondary-btn' onClick={() => setTestModal(true)}>
        <img src='/img/test-outline.svg' alt='test icon' />{' '}
        <span>Add test</span>
      </button>
    </div>
  )
}

export default AddContentBlock
