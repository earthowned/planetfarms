import Button from '../../button/Button'
import LessonCourseSingle from './LessonCourseSingle'

const LessonCourse = ({ data, setPurchaseModal }) => {
  const lessonLen = data?.data?.lessons.length
  console.log(data?.data?.lessons)

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
      {data?.data?.lessons
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((data) => {
          return <LessonCourseSingle data={data} key={data.id} />
        })}
    </div>
  )
}
export default LessonCourse
