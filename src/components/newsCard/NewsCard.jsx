import './NewsCard.scss'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteNews } from '../../actions/newsActions'

function NewsCard ({ news, editCard }) {
  const dispatch = useDispatch()
  const deleteNewsCard = (id) => {
    dispatch(deleteNews(id))
  }
  return (
    <>
      {news && news.map((news) => {
        return (
          <div className='news-card border-1px-onyx'>
            <div className='news-card-header'>
              <div className='news-show-date'>{moment(news.createdAt).fromNow()}</div>
              <div className='card-edit'>
                <button className='edit-btn' onClick={() => editCard(news.id)}>
                  <img src='/img/more-horizontal.svg' alt='burger icon' />
                </button>
                <button className='edit-btn' onClick={() => deleteNewsCard(news.id)}>
                  <img src='/img/trash-icon.svg' alt='burger icon' />
                </button>
              </div>
            </div>
            <Link to={{ pathname: '/community-page-news-view', state: { news } }}>
              <div key={news.id}>
                <div className='newsCard-group'>
                  <div className='frame-text'>
                    <div className='frame-3501'>
                      <div className='farming ibmplexsans-semi-bold-caribbean-green-14px'>{news.category}</div>
                      <h1 className='subtitle ibmplexsans-semi-bold-quarter-spanish-white-24px'>{news.title}</h1>
                    </div>
                    <div className='overflow module'>
                      <p className='news-text ibmplexsans-normal-quarter-spanish-white-16px'>
                        {news?.textDetail?.collectionDescription || news?.imageDetail?.imageDescription || news?.videoDetail?.videoDescription}
                      </p>
                    </div>
                    <div className='date ibmplexsans-normal-quarter-spanish-white-14px'>
                      {new Date(news.createdAt).toDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default NewsCard
