import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { GET_THUMBNAIL } from '../../../utils/urlConstants'
import { addEnroll } from '../../../actions/enrollActions'

import ProgressBar from './ProgressBar'
import Button from '../../button/Button'
import DropDownCourse from './DropDownCourse'

const CourseDetail = ({
  setFeedbackModal,
  setPurchaseModal,
  data,
  isLoading,
  userInfo
}) => {
  const dispatch = useDispatch()
  const [isEnroll, setIsEnroll] = useState('')
  const [joinCourse, setJoinCourse] = useState(false)
  const [enrollCourseId, setEnrollCourseId] = useState('')

  useEffect(() => {
    const isEnrolled = data?.data?.enrolls
      .filter((enroll) => enroll.userId === userInfo.id)
      .map((enroll) => {
        setIsEnroll(enroll.isEnroll)
        setEnrollCourseId(enroll.courseId)
      })
  }, [data])

  const enrollFreeCourse = (courseId) => {
    setJoinCourse(!joinCourse)
    const userId = userInfo.id
    dispatch(addEnroll(courseId, userId))
  }

  return (
    <div className='description-course-page'>
      <img
        className='bg-image'
        src={`${GET_THUMBNAIL}${data?.data?.thumbnail}`}
        alt=''
      />
      <div className='course-details-wrapper'>
        <div className='course-description'>
          <div className='course-description-header'>
            <h1 className='course-title'>{data?.data?.title}</h1>
            {data?.data?.isFree === false ? (
              <div className='dropdown-course-container'>
                <Button
                  name='Buy Course'
                  clickHandler={() => setPurchaseModal(true)}
                />
              </div>
            ) : joinCourse ||
              (isEnroll === true && enrollCourseId === data?.data?.id) ? (
                <DropDownCourse setFeedbackModal={setFeedbackModal} />
                ) : (
                  <div className='dropdown-course-container'>
                    <Button
                      name='Join Course'
                      onClick={() => enrollFreeCourse(data?.data?.id)}
                    />
                  </div>
                )}
          </div>
          <p className='course-desc'>{data?.data?.description}</p>
          <ProgressBar data={data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
