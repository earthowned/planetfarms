import { useState } from 'react'
const Follow = () => {
  const [follow, setFollow] = useState(false)
  const handleOnClick = () => {
    setFollow(!follow)
  }
  return (
    <div className='follow-container'>
      <div className='person-add-outline-2-1'>
        <div className='flex-row-7'>
          <img
            style={{ height: '20px', width: '20px', cursor: 'pointer' }}
            src={follow ? 'img/follow-icon.svg' : '/img/followed-icon.svg'}
            alt='follow'
          />
        </div>
      </div>
      <div
        className={follow ? 'follow ibmplexsans-semi-bold-caribbean-green-16px' : 'follow ibmplexsans-semi-bold-monsoon-16px'}
        style={{ cursor: 'pointer' }}
        onClick={handleOnClick}
      >
        {follow ? 'Follow' : 'Followed'}
      </div>
    </div>
  )
}

export default Follow
