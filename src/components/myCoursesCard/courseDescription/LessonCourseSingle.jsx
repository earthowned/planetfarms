import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { GET_COVERIMG } from '../../../utils/urlConstants'
import { createLessonProgress } from '../../../actions/lessonProgressActions'

const LessonCourseSingle = ({
  data,
  userInfo,
  creator,
  isEnroll,
  joinCourse,
  enrolls,
  clickLessonId,
  setClickLessonId,
  progressData,
  refetch
}) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [isLessonCompleted, setIsLessonCompleted] = useState(false)
  const [userId, setUserId] = useState('')
  const [progress, setProgress] = useState()

  useEffect(() => {
    setIsLessonCompleted(data?.lesson_progresses[0]?.isCompleted)
    setUserId(data?.lesson_progresses[0]?.userId || null)
  }, [data, progressData])

  const lessonStart = async (id) => {
    const clickLesso = data?.lesson_progresses.filter(
      (pro) => pro.lessonId === id
    )
    console.log(clickLesso)
    const addProgress = () => {
      const startTime = moment().toDate().getTime().toString()
      const lessonId = id
      const userId = enrolls[0]?.userId
      const comp = false
      dispatch(
        createLessonProgress({
          lessonId,
          userId,
          isCompleted: comp,
          startTime,
          history,
          refetch
        })
      )
    }
    clickLesso?.length > 0 ? history.push(`/lesson/${id}`) : addProgress()
  }
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
          <button onClick={() => lessonStart(data.id)}>See Lesson</button>
        </div>
      </div>
    </div>
  )
}

export default LessonCourseSingle
