import React from 'react'
import Background from '../background/Background'
import './CourseCreateModal.scss'

const CourseCreateModal = ({ clickHandler, collectionAdded }) => {
  return (
    <div className='course-create-container'>
      <div className='course-create-modal'>
        <div className='course-create-modal-header'>
          <h3>Add new course</h3>
          <button onClick={() => clickHandler(false)}><img src='/img/close-outline.svg' alt='close-outline' /></button>
        </div>
        <h4>Choose what type of course would you like to create</h4>
        <div className='course-type'>
          <button>
            <Background image='/img/farmer.svg'>
              <div>
                <h3>Usual course</h3>
                <p>Online course with lessons and tests</p>
              </div>
            </Background>
          </button>
          <button>
            <Background image='/img/live-exp.png'>
              <div>
                <h3>Live experience</h3>
                <p>Live lesson session with your users</p>
              </div>
            </Background>
          </button>
        </div>
        <div className='course-create-modal-btn'>
          <button className='default-btn' onClick={() => collectionAdded()}>
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCreateModal
