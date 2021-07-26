import React from 'react'

const AddContentBlock = ({
  setVideoModal,
  setImageModal,
  setTextModal,
  setTestModal
}) => {
  return (
    <div className='admin-lesson-create-btn-wrapper'>
      <button className='secondary-btn' onClick={() => setVideoModal(true)}>
        <img src='/img/video-outline.svg' alt='video icon' />{' '}
        <span>Add video</span>
      </button>
      <button className='secondary-btn' onClick={() => setImageModal(true)}>
        <img src='/img/image-outline.svg' alt='image_icon' />
        <span>Add image</span>
      </button>
      <button className='secondary-btn' onClick={() => setTextModal(true)}>
        <img src='/img/text-outline.svg' alt='text icon' />{' '}
        <span>Add text</span>
      </button>
      <button className='secondary-btn' onClick={() => setTestModal(true)}>
        <img src='/img/test-outline.svg' alt='test icon' />{' '}
        <span>Add test</span>
      </button>
    </div>
  )
}

export default AddContentBlock
