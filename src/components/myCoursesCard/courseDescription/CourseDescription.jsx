import MoreCourse from './MoreCourse'
import CourseDetail from './CourseDetail'
import LessonCourse from './LessonCourse'
import './CourseDescription.scss'

const CourseDescription = ({
  setFeedbackModal,

  setPurchaseModal,
  data,
  isLoading,
  userInfo
}) => {
  return (
    <>
      <div className='course-page-container border-1px-onyx'>
        <CourseDetail
          setFeedbackModal={setFeedbackModal}
          setPurchaseModal={setPurchaseModal}
          data={data}
          isLoading={isLoading}
          userInfo={userInfo}
        />
        <LessonCourse data={data} setPurchaseModal={setPurchaseModal} />
      </div>
      <MoreCourse />
    </>
  )
}

export default CourseDescription
