import React, { useState } from 'react'
import Background from '../background/Background'
import PopupModal from '../modal/Modal'
import './CourseCreateModal.scss'

const CourseCreateModal = ({ collectionAdded, openModal, closeModal }) => {
  const [selectedBtn, setSelectedBtn] = useState('')

  const createCourseHandler = () => {
    console.log(selectedBtn)
  }
  return (
    <PopupModal
      width='600px'
      height='500px'
      title='Add new course'
      openModal={openModal}
      closeModal={closeModal}
    >
      <h4>Choose what type of course would you like to create</h4>
      <div className='course-type selected'>
        <button
          onClick={() => setSelectedBtn('usual')}
          className={selectedBtn === 'usual' ? selectedBtn : ''}
        >
          <Background staticImg='/img/farmer.svg'>
            <div>
              <h3>Usual course</h3>
              <p>Online course with lessons and tests</p>
            </div>
          </Background>
        </button>
        <button
          onClick={() => setSelectedBtn('live')}
          className={selectedBtn === 'live' ? selectedBtn : ''}
        >
          <Background staticImg='/img/live-exp.png'>
            <div>
              <h3>Live experience</h3>
              <p>Live lesson session with your users</p>
            </div>
          </Background>
        </button>
      </div>
      <div className='course-create-modal-btn'>
        <button
          className='default-btn'
          onClick={() =>
            selectedBtn === 'usual' ? collectionAdded() : createCourseHandler()}
        >
          Continue
        </button>
      </div>
    </PopupModal>
  )
}

export default CourseCreateModal
