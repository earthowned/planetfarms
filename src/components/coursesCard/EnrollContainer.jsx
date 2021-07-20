import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addEnroll } from '../../actions/enrollActions'

const EnrollContainer = ({ item, userInfo, setPurchaseModal }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isEnroll, setIsEnroll] = useState('')
  const [enrollCourseId, setEnrollCourseId] = useState('')

  const adminCoursePath = `/admin/course/${item.id}`

  const enrollFreeCourse = (courseId) => {
    const userId = userInfo.id
    dispatch(addEnroll(courseId, userId, history))
  }
  useEffect(() => {
    const isEnrolled = item.enrolls
      .filter((enroll) => enroll.userId === userInfo.id)
      .map((enroll) => {
        setIsEnroll(enroll.isEnroll)
        setEnrollCourseId(enroll.courseId)
      })
  }, [item])

  return (
    <>
      <div className='enroll-container'>
        {isEnroll === true && enrollCourseId === item.id ? (
          <button
            className='join-btn'
            onClick={() => history.push('/mycoursepage')}
          >
            <span>You're subscriber</span>
          </button>
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
