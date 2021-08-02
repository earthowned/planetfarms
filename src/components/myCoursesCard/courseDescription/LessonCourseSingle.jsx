import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { GET_COVERIMG } from '../../../utils/urlConstants'

const LessonCourseSingle = ({ data, userInfo }) => {
  const history = useHistory()
  const [isCompleted, setIsCompleted] = useState(false)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    setIsCompleted(data.lesson_progresses[0]?.isCompleted || false)
    setUserId(data.lesson_progresses[0]?.userId || null)
  }, [data])
  console.log(userId)
  return (
    <div className='lesson-card-wrapper'>
      {data?.order !== 1 ? (
        userId === userInfo.id && isCompleted === true ? (
          ''
        ) : (
          <div className='lesson-permission' />
        )
      ) : (
        ''
      )}
      <div className={data.finish ? 'lesson-card lock-active' : 'lesson-card'}>
        <div className='lessonCoverImg'>
          <img
            className='lesson-card-img'
            src={`${GET_COVERIMG}${data.coverImg}`}
            alt='background image'
          />
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
