import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { GET_COVERIMG } from '../../../utils/urlConstants'

const LessonCourseSingle = ({ data, userInfo, creator, joinCourse }) => {
  const history = useHistory()
  const [isLessonCompleted, setIsLessonCompleted] = useState(false)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    setIsLessonCompleted(data?.lesson_progresses[0]?.isCompleted)
    setUserId(data?.lesson_progresses[0]?.userId || null)
  }, [data])

  return (
    <div className='lesson-card-wrapper'>
      {data?.order !== 1 || creator === userInfo.id || joinCourse !== true ? (
        userId === userInfo.id && isLessonCompleted === true ? (
          ''
        ) : (
          <div className='lesson-permission' />
        )
      ) : (
        ''
      )}
      <div className={data.finish ? 'lesson-card lock-active' : 'lesson-card'}>
        <div className='lessonCoverImg'>
          {data.coverImg ? (
            <img
              className='lesson-card-img'
              src={`${GET_COVERIMG}${data.coverImg}`}
              alt='background image'
            />
          ) : (
            <div className='coverImg coverImg__text lessonImg'>
              <div>
                <p>{data.title}</p>
              </div>
            </div>
          )}
        </div>
        <div className='lesson-card-content'>
          <h3>{data.title}</h3>
          {data.lessonDesc && <p>{data.lessonDesc}</p>}
          <button onClick={() => history.push(`/lesson/${data.id}`)}>
            See Lesson
          </button>
        </div>
      </div>
    </div>
  )
}

export default LessonCourseSingle
