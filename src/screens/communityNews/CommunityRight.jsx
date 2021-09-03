import { Link } from 'react-router-dom'

const CommunityRight = ({
  text,
  farming,
  people,
  nature,
  carsIndustry,
  mediaNews,
  seeAllTopics
}) => {
  return (
    <>
      <div className='community-news-right-bar'>
        <div className='community-news-right-bar-inner-container'>
          <h4>{text}</h4>
          <div className='community-news-filter-container'>
            <h6>{farming}</h6>
            <h6>{people}</h6>
            <h6>{nature}</h6>
            <h6>{carsIndustry}</h6>
            <h6>{mediaNews}</h6>
          </div>
          <Link to='/community-switching' className='nav-link'>
            {seeAllTopics}
          </Link>
        </div>
      </div>
    </>
  )
}

export default CommunityRight
