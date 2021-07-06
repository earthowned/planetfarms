import Button from '../../button/Button'
import LessonCourseSingle from './LessonCourseSingle'

const LessonCourse = ({ data, setPurchaseModal }) => {
  const lessonLen = data?.data?.lessons.length

  return (
    <div className='lessons-container'>
      {data?.data?.isFree === false && lessonLen >= 1 ? (
        <div className='purchase-course-wrapper'>
          <div className='purchase-course'>
            <h4>
              Buy this course for <span>${data?.data?.price}</span>
            </h4>
            <div>
              <Button
                name='Buy Course'
                onClick={() => setPurchaseModal(true)}
              />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
      <h3>Lessons</h3>
      {data?.data?.lessons.map((data, index) => {
        return <LessonCourseSingle data={data} key={index} />
      })}
    </div>
  )
}
export default LessonCourse
