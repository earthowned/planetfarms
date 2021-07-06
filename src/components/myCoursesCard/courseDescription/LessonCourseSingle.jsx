import { useHistory } from 'react-router'
import { GET_COVERIMG } from '../../../utils/urlConstants'

const LessonCourseSingle = ({ data }) => {
  const history = useHistory()
  return (
    <div className='lesson-card-wrapper'>
      <div className='lock-lesson'>
        <img src='/img/lesson-lock.svg' alt='lock icon' />
        <h4>Finish Lesson</h4>
      </div>
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
          {/* TODO:Need to add lesson description */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam
            non dolorem nam ex ipsam?
          </p>
          <button onClick={() => history.push(`/mycoursepage/${data.id}`)}>
            See Lesson
          </button>
        </div>
      </div>
    </div>
  )
}

export default LessonCourseSingle
