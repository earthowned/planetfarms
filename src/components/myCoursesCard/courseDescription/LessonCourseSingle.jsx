import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { GET_COVERIMG } from '../../../utils/urlConstants'

const LessonCourseSingle = ({ data, userInfo, creator, joinCourse, isEnroll }) => {
  const history = useHistory()
  const [isLessonCompleted, setIsLessonCompleted] = useState(false)
  const [userId, setUserId] = useState('')
console.log(data)
  // useEffect(() => {
  //   setIsLessonCompleted(data?.lesson_progresses[0]?.isCompleted)
  //   setUserId(data?.lesson_progresses[0]?.userId || null)
  // }, [data])
  return (
    <>
    <div className='lesson-card-wrapper'>
      <div className={data?.lesson_progresses.length === 0 ? 'lesson-card lock-active' : 'lesson-card'}>
        { data?.lesson_progresses.length === 0
        ? <>
          <div className="blur-lesson" />
          <div className='lessonCoverImg'>
            <div className="lock-lesson-content">
              <img className="lock-img" src="/img/lesson-lock.svg" alt="lesson image" />
              <h4>Finish Previous Lesson</h4>
            </div>
             <LessonCard data={data}/>
         </div>
         </>
        : <div className='lessonCoverImg'>
           <LessonCard data={data}/>
          </div>
        }
        <div className='lesson-card-content'>
          <h3>{data.title}</h3>
          {data.lessonDesc && <p>{data.lessonDesc}</p>}
          <button onClick={() => history.push(`/lesson/${data.id}`)}>
            See Lesson
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

const LessonCard = ({data}) => {
  return (
    <>
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
            )
    }
    </>
  )
}
export default LessonCourseSingle
