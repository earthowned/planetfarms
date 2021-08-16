import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
  userInfo,
  refetch,
  joinCourse
}) => {
  const {success: courseLeaveSuccess} = useSelector(state => state.leaveCourse)
  const dispatch = useDispatch()
  const [isEnroll, setIsEnroll] = useState('')
  const [enrollCourseId, setEnrollCourseId] = useState('')
  useEffect(() => {
    data?.data?.enrolls
      .filter((enroll) => enroll.userId === userInfo.id)
      .map((enroll) => {
        setIsEnroll(enroll.isEnroll)
        setEnrollCourseId(enroll.courseId)
      })
  }, [data, dispatch, courseLeaveSuccess])

  const enrollFreeCourse = (courseId) => {
    dispatch(addEnroll(courseId, false, refetch))
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
                <DropDownCourse setFeedbackModal={setFeedbackModal} courseId={data?.data?.id} />
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
