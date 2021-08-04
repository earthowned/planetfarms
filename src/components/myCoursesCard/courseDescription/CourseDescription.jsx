import { useState, useEffect } from 'react'
import MoreCourse from './MoreCourse'
import CourseDetail from './CourseDetail'
import LessonCourse from './LessonCourse'
import './CourseDescription.scss'

const CourseDescription = ({
  setFeedbackModal,
  setPurchaseModal,
  data,
  isLoading,
  userInfo,
  isEnroll
}) => {
  const [creator, setCreator] = useState('')
  useEffect(() => {
    setCreator(data?.data?.creator)
  }, [data])
  return (
    <>
      <div className='course-page-container border-1px-onyx'>
        <CourseDetail
          setFeedbackModal={setFeedbackModal}
          setPurchaseModal={setPurchaseModal}
          data={data}
          isLoading={isLoading}
          userInfo={userInfo}
        />
        <LessonCourse
          data={data}
          setPurchaseModal={setPurchaseModal}
          isEnroll={isEnroll}
          userInfo={userInfo}
          creator={creator}
        />
      </div>
      <MoreCourse />
    </>
  )
}

export default CourseDescription
