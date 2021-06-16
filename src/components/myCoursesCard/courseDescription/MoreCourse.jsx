import useSizeFinder from '../../../utils/SizeFinder'
import Secondarybtn from '../../SecondaryBtn/Secondarybtn'

const moreCourseData = [
    {
      _id: 1,
      name: 'Dianne Russell',
      message: 'Write message',
      bgImage: '/img/profile-image-2.svg'
    },

    {
      _id: 2,
      name: 'Kristin Watson',
      message: 'Write message',
      bgImage: '/img/profile-image-3.svg'
    },
    {
      _id: 3,
      name: 'Leslie Alexander',
      message: 'Write message',
      bgImage: '/img/profile-image-4.svg'
    },
    {
      _id: 4,
      name: 'Ralph Edwards',
      message: 'Write message',
      bgImage: '/img/profile-image-5.svg'
    },
    {
      _id: 5,
      name: 'Guy Hawkins',
      message: 'Write message',
      bgImage: '/img/profile-image-6.svg'
    }
  ]
  
const MoreCourse = () => {
  const screenSize = useSizeFinder()
  return (
    <>
      <div className='more-course-feature-container'>
        <MoreCourseTitle />
        <div className='more-course-container'>
          {moreCourseData.map((data) => {
            return (
              <>
               <MoreCourseItem data={data} />
              </>
            )
          })}
        </div>
        {
          screenSize < 650 && <div className='secondary-btn-container margin-left-1'><Secondarybtn name='See all users' /></div>
        }
      </div>
    </>
  )
}

function MoreCourseTitle () {
    return (
          <div className='more-course-feature-title'>
          <div className='more-course-title ibmplexsans-semi-bold-quarter-spanish-white-24px'>
            Also study this course
          </div>
          <div className='see-all-users ibmplexsans-semi-bold-caribbean-green-16px'>
            See all users
          </div>
        </div>
    )
}

function MoreCourseItem ({data}) {
    return (
         <div className='more-course'>
                  <div className='more-course-wrapper'>
                    <div
                      className='more-course-image '
                      style={{ backgroundImage: `url(${data.bgImage})` }}
                    />
                    <div className='more-course-text'>
                      <div className='more-course-name ibmplexsans-semi-bold-quarter-spanish-white-16px'>
                        {data.name}
                      </div>
                      <div className='more-course-write-message ibmplexsans-semi-bold-caribbean-green-16px'>
                        {data.message}
                      </div>
                    </div>
                  </div>
         </div>
    )
}

export default MoreCourse;