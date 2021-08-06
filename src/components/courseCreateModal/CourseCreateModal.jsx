import React, { useState } from 'react'
import CourseSelectBtn from './CourseSelectBtn'
import courseType from './CourseType'
import PopupModal from '../modal/Modal'
import './CourseCreateModal.scss'

const CourseCreateModal = ({
  collectionAdded,
  openModal,
  closeModal,
  setCreateLiveCourse
}) => {
  const [selectedBtn, setSelectedBtn] = useState('')

  const createLiveCourse = () => {
    setCreateLiveCourse(true)
    closeModal(false)
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
        {courseType.map((type) => (
          <CourseSelectBtn
            key={type.id}
            courseType={type.type}
            courseName={type.name}
            desc={type.desc}
            selectedBtn={selectedBtn}
            setSelectedBtn={setSelectedBtn}
            img={type.img}
          />
        ))}
      </div>
      <div className='course-create-modal-btn'>
        <button
          className='default-btn'
          onClick={() =>
            selectedBtn === 'usual' ? collectionAdded() : createLiveCourse()}
        >
          Continue
        </button>
      </div>
    </PopupModal>
  )
}

export default CourseCreateModal
