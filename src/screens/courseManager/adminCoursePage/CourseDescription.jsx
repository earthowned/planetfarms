import { GET_THUMBNAIL } from '../../../utils/urlConstants'
import Filter from '../../../components/filter/Filter'

const CourseDescription = ({ data }) => {
  return (
    <div className='admin-course-page-container'>
      {data?.data?.thumbnail && <div className='admin-course-img-wrapper'>
        <img
          src={GET_THUMBNAIL + data?.data?.thumbnail}
          alt={data?.data?.title + '_img'}
        />
      </div>}
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
