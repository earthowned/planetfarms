import { useHistory } from 'react-router-dom'

const EnrollContainer = ({ item, userInfo, setPurchaseModal }) => {
  const history = useHistory()
  const adminCoursePath = `/admin/course/${item.id}`

  return (
    <>
      <div className='enroll-container'>
        {item.enroll ? (
          <button
            className='join-btn'
            onClick={() => history.push('/mycoursepage')}
          >
            <span>You're subscriber</span>
          </button>
        ) : (
          <button className='join-btn'>
            {item.creator === userInfo.id ? (
              <span onClick={() => history.push(adminCoursePath)}>
                View Course
              </span>
            ) : (
              <span onClick={() => setPurchaseModal(true)}>Join Course</span>
            )}
          </button>
        )}
        <h4>{item.isFree === true ? 'Free' : `$ ${item.price}`}</h4>
      </div>
    </>
  )
}

export default EnrollContainer
