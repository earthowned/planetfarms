import { useHistory } from 'react-router'
import { GET_COVERIMG } from '../../../utils/urlConstants'

const LessonCourseSingle = ({ data }) => {
  const history = useHistory()

  return (
    <div className='lesson-card-wrapper'>
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
