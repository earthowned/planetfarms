import { GET_THUMBNAIL } from '../../../utils/urlConstants'

import ProgressBar from './ProgressBar'
import Button from '../../button/Button'
import DropDownCourse from './DropDownCourse'

const CourseDetail = ({
  setFeedbackModal,
  unpaid,
  setPurchaseModal,
  data,
  isLoading
}) => {
  return (
    <div className='description-course-page'>
      <img
        className='bg-image'
        src={`${GET_THUMBNAIL}${data?.data?.thumbnail}`}
        alt=''
      />
      <div className='course-details-wrapper'>
        <div className='course-description'>
          <div className='course-description-header'>
            <h1 className='course-title'>{data?.data?.title}</h1>
            {data?.data?.isFree === false ? (
              <div className='dropdown-course-container'>
                <Button
                  name='Buy Course'
                  clickHandler={() => setPurchaseModal(true)}
                />
              </div>
            ) : (
              <DropDownCourse setFeedbackModal={setFeedbackModal} />
            )}
          </div>
          <p className='course-desc'>{data?.data?.description}</p>
          <ProgressBar data={data} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
