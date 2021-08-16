import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addEnroll, leaveCourse } from '../../actions/enrollActions'

const EnrollContainer = ({ item, userInfo, setPurchaseModal }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isEnroll, setIsEnroll] = useState(false)
  const [enrollCourseId, setEnrollCourseId] = useState('')

  const adminCoursePath = `/admin/course/${item.id}`

  const enrollFreeCourse = (courseId) => {
    dispatch(addEnroll(courseId, history))
    setIsEnroll(true);
  }
  useEffect(() => {
    const isEnrolled = item.enrolls
      .filter((enroll) => enroll.userId === userInfo.id)
      .map((enroll) => {
        setIsEnroll(enroll.isEnroll)
        setEnrollCourseId(enroll.courseId)
      })
  }, [item])

  const leaveCourseFunc = () => {
    dispatch(leaveCourse(item.id))
    setIsEnroll(false);
  }
  
  return (
    <>
      <div className='enroll-container'>
        {isEnroll === true ? (
          <div className="enroll-btn-wrapper">
          {/* <button
            className='join-btn'
            onClick={() => history.push('/course/' + item.id)}
          >
            <span>Go to course</span>
          </button> */}
           <button
            className='join-btn red-text'
            onClick={leaveCourseFunc}
          >
            <span>Leave Course</span>
          </button>
          </div>
        ) : (
          <button className='join-btn'>
            {item.creator === userInfo.id ? (
              <span onClick={() => history.push(adminCoursePath)}>
                View Course
              </span>
            ) : (
              <span
                onClick={() =>
                  item.isFree === true
                    ? enrollFreeCourse(item.id)
                    : setPurchaseModal(true)}
              >
                Join Course
              </span>
            )}
          </button>
        )}
        <h4>{item.isFree === true ? 'Free' : `$ ${item.price}`}</h4>
      </div>
    </>
  )
}

export default EnrollContainer
