import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addEnroll } from '../../actions/enrollActions'

const EnrollContainer = ({ item, userInfo, setPurchaseModal }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const adminCoursePath = `/admin/course/${item.id}`

  const enrollFreeCourse = (courseId) => {
    const userId = userInfo.id
    console.log(courseId, userId)
    dispatch(addEnroll(courseId, userId, history))
  }

  return (
    <>
      <div className='enroll-container'>
        {item.enroll ? (
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
