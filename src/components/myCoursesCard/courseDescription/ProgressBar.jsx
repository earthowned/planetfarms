import useSizeFinder from '../../../utils/sizeFinder'

const ProgressBar = ({ data, isLoading }) => {
  const courseData = data?.data
  const lessonData = courseData?.lessons
  const lessonLength = lessonData.length
  const lessonIndicator = lessonLength * (115 / lessonLength)
  const accurateIndicator = lessonIndicator === 115 ? 92 : lessonIndicator
  const windowWidth = useSizeFinder()
  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <div className='lesson-bar'>
      {windowWidth > 600 ? (
        <div
          style={{ width: `${accurateIndicator}%` }}
          className='lesson-progress-indicator'
        />
      ) : (
        <div
          style={{ height: `${accurateIndicator}%` }}
          className='lesson-progress-indicator'
        />
      )}
      {lessonData &&
        lessonData?.map((item, index) => {
          return (
            <div className='lesson-progress-content' key={index}>
              <div
                className={
                  courseData.isFree === false
                    ? 'circle-wrapper-active'
                    : 'circle-wrapper'
                }
              >
                {courseData.isFree === false && <div className='circle' />}
              </div>
              <h4
                className={
                  courseData.isFree === false
                    ? 'lesson-progress-heading-active'
                    : 'lesson-progress-heading'
                }
              >
                {item.title}
              </h4>
            </div>
          )
        })}
    </div>
  )
}

export default ProgressBar
