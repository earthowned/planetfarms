import { GET_THUMBNAIL } from '../../../utils/urlConstants'
import Filter from '../../../components/filter/Filter'

const CourseDescription = ({ data }) => {
  return (
    <div className='admin-course-page-container'>
      <div className='admin-course-img-wrapper'>
        <img src={GET_THUMBNAIL + data?.thumbnail} alt={data?.title + '_img'} />
      </div>
      <div className='admin-course-details-wrapper'>
        <div className='admin-course-details'>
          <div className='admin-course-details--header'>
            <h1>{data?.title}</h1>
            <div className='admin-filter-container'>
              <Filter name='Course settings' />
            </div>
          </div>
          <p>{data?.description}</p>
        </div>
        <div className='admin-lesson-progress-container'>
          <div>
            <div className='admin-lesson-indicator'>
              <div className='inner-circle' />
            </div>
            <span>Lesson 1</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDescription
