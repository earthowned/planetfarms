import React, { useState } from 'react'

import MoreCourse from './MoreCourse'
import CourseDetail from './CourseDetail'
import LessonCourse from './LessonCourse'
import './CourseDescription.scss'

const CourseDescription = ({
  setFeedbackModal,
  unpaid,
  setPurchaseModal,
  data,
  isLoading
}) => {
  return (
    <>
      <div className='course-page-container border-1px-onyx'>
        <CourseDetail
          setFeedbackModal={setFeedbackModal}
          unpaid={unpaid}
          setPurchaseModal={setPurchaseModal}
          data={data}
          isLoading={isLoading}
        />
        <LessonCourse data={data} setPurchaseModal={setPurchaseModal} />
      </div>
      <MoreCourse />
    </>
  )
}

export default CourseDescription
