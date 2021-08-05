import React, { useState } from 'react'
import Background from '../background/Background'
import './CourseCreateModal.scss'

const CourseCreateModal = ({ clickHandler, collectionAdded }) => {
  const [selectedBtn, setSelectedBtn] = useState('')

  const createCourseHandler = () => {
    console.log(selectedBtn)
  }
  return (
    <div className='course-create-container'>
      <div className='course-create-modal'>
        <div className='course-create-modal-header'>
          <h3>Add new course</h3>
          <button onClick={() => clickHandler(false)}>
            <img src='/img/close-outline.svg' alt='close-outline' />
          </button>
        </div>
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
              selectedBtn === 'usual'
                ? collectionAdded()
                : createCourseHandler()}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCreateModal
