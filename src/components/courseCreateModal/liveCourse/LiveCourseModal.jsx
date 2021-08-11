import React from 'react'
import PopupModal from '../../modal/Modal'
const LiveCourseModal = ({ openModal, closeModal }) => {
  return (
    <PopupModal
      width='37.500em'
      height='10em'
      title='Create Live Course'
      openModal={openModal}
      closeModal={closeModal}
    >
      <h3>Sorry!!! this feature is not available</h3>
    </PopupModal>
  )
}

export default LiveCourseModal
