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
  isEnroll,
  refetch,
  enrolls
}) => {
  const [creator, setCreator] = useState('')
  const [joinCourse, setJoinCourse] = useState(false)

  useEffect(() => {
    setCreator(data?.data?.creator)
    setJoinCourse(isEnroll || false)
  }, [data, isEnroll])

  return (
    <>
      <div className='course-page-container border-1px-onyx'>
        <CourseDetail
          setFeedbackModal={setFeedbackModal}
          setPurchaseModal={setPurchaseModal}
          data={data}
          isLoading={isLoading}
          userInfo={userInfo}
          refetch={refetch}
          joinCourse={joinCourse}
        />
        <LessonCourse
          data={data}
          setPurchaseModal={setPurchaseModal}
          isEnroll={isEnroll}
          userInfo={userInfo}
          creator={creator}
          joinCourse={joinCourse}
          enrolls={enrolls}
        />
      </div>
      <MoreCourse />
    </>
  )
}

export default CourseDescription
