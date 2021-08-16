import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { leaveCourse } from '../../../actions/enrollActions'


const DropDownCourse = ({ courseId, setFeedbackModal }) => {
  const [courseDropDown, setCourseDropDown] = useState(false)

  function submitFeedback () {
    setFeedbackModal(true)
    setCourseDropDown(false)
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const unsubscribeCourse = async () => {
    dispatch(leaveCourse(courseId, history))
    setCourseDropDown(false);
  }

  return (
    <div className='dropdown-course-container'>
      <div
        className='dropdown-course-header'
        onClick={() => setCourseDropDown(!courseDropDown)}
      >
        <h4>You are subscriber</h4>
        <img src='/img/down-arrow.svg' alt='dropdown icon' />
      </div>
      {courseDropDown && (
        <div className='dropdown-course-items'>
          <ul>
            <li>Ask a question</li>
            <li onClick={submitFeedback}>Feedback</li>
            <li onClick={unsubscribeCourse}>Leave Course</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDownCourse
