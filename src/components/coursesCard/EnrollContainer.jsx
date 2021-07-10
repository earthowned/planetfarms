import { useHistory } from 'react-router-dom'

const EnrollContainer = ({ item }) => {
  const history = useHistory()
  return (
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
          <span>Join Course</span>
        </button>
      )}
      <h4>{item.isFree === true ? 'Free' : `$ ${item.price}`}</h4>
    </div>
  )
}

export default EnrollContainer
