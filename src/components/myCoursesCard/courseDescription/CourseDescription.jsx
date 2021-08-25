import { useState, useEffect } from 'react'
import MoreCourse from './MoreCourse'
import CourseDetail from './CourseDetail'
import LessonCourse from './LessonCourse'
import './CourseDescription.scss'
import { postApi } from '../../../utils/apiFunc'
import { useDispatch } from 'react-redux'
import { ADD_COURSE_VIEW } from '../../../utils/urlConstants'

const CourseDescription = ({
  setFeedbackModal,
  setPurchaseModal,
  data,
  isLoading,
  userInfo,
  isEnroll,
  refetch,
  courseId
}) => {
  const [creator, setCreator] = useState('')
  const [joinCourse, setJoinCourse] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    setCreator(data?.data?.creator)
    setJoinCourse(isEnroll || false)
  }, [data, isEnroll])

  // useEffect(() => {
  //   if(!creator) {
  //     countViews()
  //     console.log('hellow')
  //   }
  // }, [creator])

  return (
    <>
      <div className='course-page-container border-1px-onyx'>
        <CourseDetail
          setFeedbackModal={setFeedbackModal}
          setPurchaseModal={setPurchaseModal}
          data={data}
          isEnroll={isEnroll}
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
        />
      </div>
      <MoreCourse />
    </>
  )
}

export default CourseDescription
