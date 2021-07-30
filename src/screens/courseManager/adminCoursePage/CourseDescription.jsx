import { GET_THUMBNAIL } from '../../../utils/urlConstants'
import Filter from '../../../components/filter/Filter'
import CourseActions from './CourseActions'

const CourseDescription = ({
  data,
  setIsEditCourse,
  courseId,
  deleteCourse,
  history,
  dispatch
}) => {
  return (
    <div className='admin-course-page-container'>
      <div className='admin-course-img-wrapper'>
        <CourseActions
          id={data?.data?.id}
          setIsEditCourse={setIsEditCourse}
          courseId={courseId}
          deleteCourse={deleteCourse}
          history={history}
          dispatch={dispatch}
        />
        <img
          src={GET_THUMBNAIL + data?.data?.thumbnail}
          alt={data?.data?.title + '_img'}
        />
      </div>
      <div className='admin-course-details-wrapper'>
        <div className='admin-course-details'>
          <div className='admin-course-details--header'>
            <h1>{data?.data?.title}</h1>
            <div className='admin-filter-container'>
              <Filter name='Course settings' />
            </div>
          </div>
          <p>{data?.data?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default CourseDescription
